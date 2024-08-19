import React from "react";
import { Grid } from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { BarChart } from "./charts/BarChart";
import { useFetchContas } from "../utils/Contas.hook";
import { DoughnutChart } from "./charts/DoughnutChart";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";
import { useDespesaContext } from "../services/DespesaContext";


// Registro dos componentes do ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const DashboardCharts: React.FC = () => {
    const { despesas } = useDespesaContext();

    const { contas, error } = useFetchContas();
    if (error) {
        return <div>{error}</div>;
    }

    const despesasMesAtual = contas.filter((conta) => {
        const vencimento = new Date(conta.vencimento);
        return vencimento.getMonth() === new Date().getMonth() && vencimento.getFullYear() === new Date().getFullYear();
    })

    const totalDespesasMensais = despesasMesAtual.reduce((acc, conta) => acc + parseFloat(conta.valor), 0);

    return (
        <Grid container spacing={5}>
            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)"
                    cardValue={totalDespesasMensais}
                    title="Despesas no mês atual"
                />
            </Grid>

            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)"
                    cardValue={999}
                    title="Recebimento estimado"
                />
            </Grid>

            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)"
                    cardValue={999}
                    title="Saldo estimado"
                />
            </Grid>

            <Grid item xs={8}>
                <BarChart contas={contas} />
            </Grid>

            <Grid item xs={4}>
                <DoughnutChart />
            </Grid>

            {/* Table */}
            <Grid item xs={12}>
                <DashboardTable contas={contas} />
            </Grid>
        </Grid>
    );
};