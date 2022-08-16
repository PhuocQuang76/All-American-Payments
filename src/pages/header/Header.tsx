

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {MenuItems} from  '../../data/MenuItems';
import {BrowserRouter } from "react-router-dom";
import {Link} from "react-scroll";
import {makeStyles, createTheme, responsiveFontSizes,MuiThemeProvider} from "@material-ui/core";



// github.com/fireclint/execute-financial\


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    // children:React.ReactElement;
    window?: () => Window;
}

let theme = createTheme();
theme=responsiveFontSizes(theme);

const useStyles = makeStyles({
    button:{
        backgroundColor:'transparent',
        '&:hover':{
            backgroundColor:"gray",
            color:"#564836",
            fontStyle: "italic",
            fontWeight: "bold",
            fontFamily: 'Antonio',
        }
    },
    title:{
        fontFamily: 'Antonio',
    }
});


const drawerWidth = 200;
const HeaderBar = (props: Props):JSX.Element => {
    const classes = useStyles();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{backgroundColor:"#a2c7d0", height:"100%", fontFamily:'Antonino'}} onClick={handleDrawerToggle} sx={{ textAlign:"center"}}>
            <Typography
                className={classes.title}
                variant="h6" sx={{ my: 2 }}>
                All American Payments
            </Typography>
            <Divider />

            <List style={{ width:"100%",fontSize:"15px"}} >
                {MenuItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} className={classes.button}>
                            <Link to={item.url} spy={true} smooth={true} offset={-100} duration={500}>{item.title}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItemButton sx={{ textAlign: 'center' }} className={classes.button}>
                    <Link  to={'section_info'} spy={true} smooth={true} offset={-100} duration={500}>801-972-8282</Link>
                </ListItemButton>
            </List>
        </Box>
    );



    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <BrowserRouter >

        <Box  sx={{ display: 'flex' }}>
            <MuiThemeProvider theme={theme}>
            <AppBar style={{backgroundColor:"#a2c7d0", height:"100px", width:"100%"}} component="nav">

                <Toolbar>
                    {/*company name*/}
                    <Typography
                        className={classes.title}
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'h', sm: 'block' } }}
                    >
                        All American Payments
                    </Typography>

                    {/*tabs*/}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        {MenuItems.map((item) => (
                            <Button
                                className={classes.button}
                                key={item.title}
                                sx={{ color: '#fff' }}
                            >
                                <Link to={item.url} spy={true} smooth={true} offset={-100} duration={500}>{item.title}</Link>

                            </Button>

                        ))}
                        <Button
                            className={classes.button}
                            sx={{ color: 'red' }}
                        >
                            <Link to={'section_info'} spy={true} smooth={true} offset={-100} duration={500}>801-972-8282</Link>

                        </Button>
                    </Box>
                    {/*app bar*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>

            </AppBar>
            </MuiThemeProvider>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            {/*<Box component="main" sx={{ p: 3 }}>*/}
            {/*    <Toolbar />*/}
            {/*    /!*<Typography>*!/*/}

            {/*    /!*    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet*!/*/}
            {/*    /!*    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam*!/*/}
            {/*    /!*   *!/*/}
            {/*    /!*</Typography>*!/*/}
            {/*</Box>*/}
        </Box>

        </BrowserRouter>
    );
}
export default HeaderBar;


// {MenuItems.map((item) => (
//     <MenuItem key={item.title}  onClick={handleCloseNavMenu}>
//         <Button  sx={{ color: '#fff' }} >
//             <Link  to={item.url}>{item.title}</Link>
//         </Button>
//     </MenuItem>
// ))}