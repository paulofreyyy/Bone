import { Box, Container, Grid, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { DashboardCharts } from "../components/DashboardCharts";
import { CreateButton } from "../components/buttons/CreateButton";

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                marginTop: "100px",
                display: "flex",
            }}
        >
            <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />

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

                    {/* Cards e gráficos */}
                    <Grid item xs={12}>
                        <DashboardCharts />
                    </Grid>
                </Grid>

                <CreateButton />

            </Container>
        </Box>
    )
}