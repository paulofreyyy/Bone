import { Box } from "@mui/material"
import { Doughnut } from "react-chartjs-2"


export const DoughnutChart: React.FC = () => {
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
    return (
        <Box sx={{ background: "white", padding: '20px', borderRadius: '8px' }}>
            <Doughnut data={doughnutData} options={doughnutOptions} />
        </Box>
    )
}