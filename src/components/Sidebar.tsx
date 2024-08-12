import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import {
    AppBar,
    Badge,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface SidebarProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const drawerWidth = 240;

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleDrawer }) => {
    const items = [
        { text: 'Dashboard', icon: <HomeIcon /> },
        { text: 'Usuários', icon: <PersonIcon /> },
        { text: 'Produtos', icon: <CategoryIcon /> }
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    marginLeft: isOpen ? drawerWidth : 0,
                    width: isOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
                }}
                elevation={0}
            >
                <Toolbar sx={{
                    bgcolor: 'white',
                }}>
                    <IconButton
                        edge="start"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{ marginRight: '36px' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton sx={{ ml: 'auto' }}>
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                open={isOpen}
                sx={{
                    width: isOpen ? drawerWidth : 0,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
                        border: "none",
                    },
                }}
            >   
                <Typography
                    textAlign={'center'}
                    color='#8325db'
                    fontWeight='bold'
                    variant='h5'
                    p={2}
                >
                    BONE
                </Typography>

                {/* <Divider /> */}


                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index} button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
