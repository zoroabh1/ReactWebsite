import React from 'react'
import CustomButton from './CustomButton'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
    },
    logo: {
        width: "15%", 
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
    },
    menuItem: {
        cursor:"pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
    }
})

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bar} color="rgba(0,0,0,0.87)"> 
            <img src={logo} alt='logo' className={classes.logo} />
            <img src={logoMobile} alt='mobileLogo' className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Careers
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Demos 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomButton txt="Trial Our Product"/>
        </Toolbar>
    )
 
}
