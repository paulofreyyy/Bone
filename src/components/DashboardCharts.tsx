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
import { DoughnutChart } from "./charts/DoughnutChart";
import { DashboardCard } from "./DashboardCard";
import { DashboardTable } from "./DashboardTable";
import { useDespesaContext } from "../services/DespesaContext";

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
    console.log('Despesas atuais:', despesas);

    const despesasMesAtual = despesas.filter((despesa) => {
        const vencimento = new Date(despesa.vencimento);
        return vencimento.getMonth() === new Date().getMonth() && vencimento.getFullYear() === new Date().getFullYear();
    })

    const totalDespesasMensais = despesasMesAtual.reduce((acc, despesa) => acc + parseFloat(despesa.valor), 0);

    return (
        <Grid container spacing={5}>
            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient(135deg, #FEB692 10%, #EA5455 100%)"
                    cardValue={totalDespesasMensais}
                    title="Despesas no mês atual"
                />
            </Grid>

            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)"
                    cardValue={999}
                    title="Receita estimada"
                />
            </Grid>

            <Grid item xs={4}>
                <DashboardCard
                    background="linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)"
                    cardValue={999}
                    title="Saldo final"
                />
            </Grid>

            <Grid item xs={8}>
                <BarChart contas={despesas} />
            </Grid>

            <Grid item xs={4}>
                <DoughnutChart />
            </Grid>

            {/* Table */}
            <Grid item xs={12}>
                <DashboardTable contas={despesas} />
            </Grid>
        </Grid>
    );
};