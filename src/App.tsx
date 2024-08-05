// src/App.js
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div style={{display: 'flex'}}>
        <Sidebar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

        <div style={{ marginLeft: isDrawerOpen ? 240 : 60, padding: 20, flexGrow: 1, backgroundColor: 'red' }}>
            <h1>Dashboard Content</h1>
            <p>Teste</p>
        </div>
    </div>
  );
};

export default App;
