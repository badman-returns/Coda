import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-node'
import { setSpotifyToken } from '../../store/actions/token';
import { setSpotifyUser, setSpotifyUserPlaylist } from '../../store/actions/user';
import { getTokenFromResponse } from '../../services/spotify.api.service';
import { makeStyles } from '@material-ui/core';
import Login from '../../components/Login/Login';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(180deg, rgba(244,241,246,1) 1%, rgba(203,29,164,1) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
    }

}));

const spotifyAPIService = new SpotifyWebApi();

function Home() {

    const accessToken = useSelector(state => state.spotifyToken.token);
    const dispatch = useDispatch();

    useEffect(() => {

        let hash = getTokenFromResponse();
        let token = hash.access_token;
        window.location.hash = "";

        if (token) {
            spotifyAPIService.setAccessToken(token);
            dispatch(setSpotifyToken(token));

            spotifyAPIService.getMe().then((response) => {
                dispatch(setSpotifyUser(response.body));
            });

            spotifyAPIService.getUserPlaylists().then((response) => {
                dispatch(setSpotifyUserPlaylist(response.body.items));
            })
        }
    }, [accessToken, dispatch]);

    const classes = useStyles();

    return (
        <div>
            {!accessToken &&
                <div className={classes.root}>
                    <Login />
                </div>
            }
            {accessToken && (
                <>Home</>
            )}
        </div>
    )
}

export default Home

