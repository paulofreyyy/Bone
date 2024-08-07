import React from "react";
import { Box, Grid } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
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
    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'Despesas por categoria',
            data: [300, 50, 100],
            backgroundColor: [
                '#FEB692',
                '#CE9FFC',
                '#90F7EC'
            ],
            hoverOffset: 4,
        }],
    };

    const doughnutOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Despesas por categoria',
            },
        },
    };

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
                <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </Box>
            </Grid>
        </Grid>
    );
};