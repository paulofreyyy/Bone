import { Dashboard } from './pages/Dashboard';
import { Box } from '@mui/material';

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', bgcolor: "#f0f0f0", height: '100vh' }}>
            <Dashboard />
        </Box>
    );
};

export default App;
