import { Box, Grid } from "@mui/material";
import { Bar, Doughnut } from "react-chartjs-2";
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

// Dados e opções para o gráfico de barras
const barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
        {
            label: 'Despesas',
            data: [300, 500, 100, 200, 300, 400, 200],
            backgroundColor: [
                '#FEB692',
                '#CE9FFC',
            ],
        },
    ],
};

const barOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Despesas mensais',
        },
    },
};

// Dados e opções para o gráfico de rosquinhas
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

export const DashboardCharts = () => (
    <Grid container spacing={5}>
        <Grid item xs={8}>
            <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
                <Bar data={barData} options={barOptions} />
            </Box>
        </Grid>

        <Grid item xs={4}>
            <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
                <Doughnut data={doughnutData} options={doughnutOptions} />
            </Box>
        </Grid>
    </Grid>
);