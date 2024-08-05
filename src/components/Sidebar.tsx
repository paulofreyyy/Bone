import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface SidebarProps {
    isOpen: boolean;
    toggleDrawer: () => void;
  }

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleDrawer}) =>{
    const items = [
        { text: 'Dashboard', icon: <HomeIcon /> },
        { text: 'Users', icon: <PersonIcon /> }
    ];

    return(
        <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}