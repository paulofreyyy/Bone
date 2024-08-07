import { Typography, Box } from "@mui/material"

interface dashboardCardProps {
    title: string;
    cardValue: number;
    background: string;
}

export const DashboardCard: React.FC<dashboardCardProps> = ({ title, cardValue, background }) => {
    return (
        <Box
            sx={{
                background: background,
                color: "white",
                padding: '50px',
                borderRadius: '12px',
                direction: "column"
            }}
        >
            <Typography variant="h5" mb={2}>{title}</Typography>
            <Typography variant="h4" fontWeight={'bold'}>{`R$ ${cardValue.toFixed(2)}`}</Typography>
        </Box>
    )
}