import { Box, Grid } from "@mui/material"
import { Bar, Doughnut } from "react-chartjs-2"
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const DashboardCharts = () => {
    //ChartJS data
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
            {
                label: 'Expenses',
                data: [300, 500, 100, 200, 300, 400, 200],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },

        ],
    }

    const dataDoughnut = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <Grid container spacing={5}>
            <Grid item xs={8}>
                <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
                    <Bar data={data} />
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
                    <Doughnut data={dataDoughnut} />
                </Box>
            </Grid>
        </Grid>
    )
}