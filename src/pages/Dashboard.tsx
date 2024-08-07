import { Box, Container, Grid, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { DashboardCard } from "../components/DashboardCard";

export const Dashboard = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                marginTop: "100px",
            }}
        >
            <Container maxWidth='xl'>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Box display={'flex'} alignItems={"center"}>
                            <HomeIcon sx={{
                                bgcolor: "red",
                                width: "50px",
                                height: "50px",
                                padding: "12px",
                                borderRadius: "10px",
                                color: "white",
                                background: "linear-gradient(235deg, rgba(37,28,186,1) 0%, rgba(62,62,163,1) 35%, rgba(0,212,255,1) 100%)",
                            }} />
                            <Typography variant='h5' sx={{ fontWeight: 'bold', ml: '15px' }}>Dashboard</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <DashboardCard
                            background="linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)"
                            cardValue={999}
                            title="Despesas mensais"
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
                </Grid>
            </Container>
        </Box>
    )
}