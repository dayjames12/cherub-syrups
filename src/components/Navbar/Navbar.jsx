import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/cherub.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography
                    variant="h6"
                    className={classes.title}
                    color="inherit"
                >
                    <img
                        src={logo}
                        alt="Cherub Syrups"
                        height="50px"
                        className={classes.image}
                    />
                    cherub syrups
                </Typography>
                <div className={classes.grow} />
                <div className={classes.IconButton}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
