import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    tolarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {

        height: '8em'
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },

    tabContainer: {
        marginLeft: 'auto',

    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {

        ...theme.typography.estimate,
        borderRadius: '50px',
        marginRight: '20px',
        marginLeft: '50px',
        height: '45px',

    }

}))




const Header = (props) => {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (e, value) => {
        setValue(value)

    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/service" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5)
        }


    })


    return (

        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" >
                    <Toolbar disableGutters >


                        <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple >

                            <img alt="company logo" src={logo} className={classes.logo} />
                        </Button>


                        <Tabs value={value} indicatorColor="primary" onChange={handleChange} className={classes.tabContainer}>

                            <Tab component={Link} className={classes.tab} label="Home" to="/" />
                            <Tab component={Link} className={classes.tab} label="Services" to="/service" />
                            <Tab component={Link} className={classes.tab} label="The Revolution" to="/revolution" />
                            <Tab component={Link} className={classes.tab} label="About US" to="/about" />
                            <Tab component={Link} className={classes.tab} label="Contact Us" to="/contact" />

                        </Tabs>

                        <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" >
                            free estimate
</Button>
                    </Toolbar>


                </AppBar>
            </ElevationScroll>
            <div className={classes.tolarMargin} />
        </React.Fragment>

    )
}

export default Header
