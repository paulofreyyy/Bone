import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Box } from '@mui/material';

const App: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ display: 'flex', bgcolor: "#f0f0f0", height: '100vh' }}>
            <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />

            <Dashboard />
        </Box>
    );
};

export default App;
