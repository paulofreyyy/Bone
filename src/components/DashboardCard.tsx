import { Typography, Box } from "@mui/material"
import { FormattedNumber, IntlProvider } from "react-intl";

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
                borderRadius: '8px',
                direction: "column"
            }}
        >
            <Typography variant="h5" mb={2}>{title}</Typography>
            <Typography variant="h4" fontWeight={'bold'}>
                <IntlProvider locale="pt-BR">
                    <FormattedNumber value={cardValue} style="currency" currency="BRL" />
                </IntlProvider>
            </Typography>
        </Box>
    )
}