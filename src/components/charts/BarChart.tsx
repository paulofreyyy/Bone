import { Box } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
    contas: {
        id: number;
        descricao: string;
        isFixa: boolean;
        valor: string;
        vencimento: string;
        pagoEm: string | null;
    }[];
}

export const BarChart: React.FC<BarChartProps> = ({ contas }) => {
    const despesasPorMes: { [key: string]: number } = {};

    contas.forEach((conta) => {
        const mes = new Date(conta.vencimento).toLocaleString('pt-Br', { month: 'long' });

        despesasPorMes[mes] = (despesasPorMes[mes] || 0) + parseFloat(conta.valor);
    })

    const labels = Object.keys(despesasPorMes);
    const data = Object.values(despesasPorMes);

    const barData = {
        labels,
        datasets: [{
            label: 'Despesas',
            data,
            backgroundColor: ['#FEB692', '#CE9FFC']
        }]
    };

    const barOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Despesas mensais'
            }
        }
    }

    return (
        <Box sx={{
            background: "white",
            padding: '20px',
            borderRadius: '8px'
        }}>
            <Bar data={barData} options={barOptions} />
        </Box>
    )
}