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

    const { contas, error } = useFetchContas();
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Grid container spacing={5}>
            <Grid item xs={8}>
                <BarChart contas={contas} />
            </Grid>

            <Grid item xs={4}>
                <DoughnutChart />
            </Grid>
        </Grid>
    );
};