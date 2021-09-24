import React from 'react';
import {
    CssBaseline,
    Grid,
    makeStyles,
    Button,
    Card,
    Typography
} from '@material-ui/core';
import { authURL } from '../../services/spotify.api.service'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        fontFamily: 'Nunito',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        borderRadius: '10px',
        textDecoration: 'none',
        color: '#000',
        width: '300px',
        height: '80px',
        fontWeight: '800',
    },
    buttonImg: {
        width: '20%',
        margin: '0 auto',
    },
    quotation: {
        color: '#fff',
        textTransform: 'uppercase',
        margin: '20px 0'
    },
    subtitle: {
        color: '#fff',
    }

}));

function Login() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Card className={classes.card} elevation={0}>
                    <Grid container direction='column' justifyContent="center" alignItems="center">
                        <img src={`${process.env.PUBLIC_URL + 'logo.png'}`} alt="logo" />
                        <a href={authURL}>
                            <Button variant="contained" className={classes.button}>
                                <Grid container alignItems="center" spacing={2}>
                                    <img className={classes.buttonImg} src={`${process.env.PUBLIC_URL + 'spotify.png'}`} alt="spotify" />
                                    <Typography variant="h6" >Login with Spotify</Typography>
                                </Grid>
                            </Button>
                        </a>
                        <Typography variant="subtitle1" className={classes.subtitle}>Made withn 💖 by T S Goswami</Typography>
                    </Grid>
                </Card>
            </div>
        </div >
    )
}

export default Login
