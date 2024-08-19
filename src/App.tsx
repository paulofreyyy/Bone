import { Dashboard } from './pages/Dashboard';
import { Box } from '@mui/material';
import { DespesaProvider } from './services/DespesaContext';

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', bgcolor: "#f0f0f0", height: '100%' }}>
            <DespesaProvider>
                <Dashboard />
            </DespesaProvider>
        </Box>
    );
};

export default App;
