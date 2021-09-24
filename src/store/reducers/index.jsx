import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { spotifyUser } from "./user";
import { spotifyToken } from "./token";

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['spotifyUser', 'spotifyToken']
}

const reducers = combineReducers({
    spotifyToken: spotifyToken,
    spotifyUser: spotifyUser,
});

export default persistReducer(persistConfig, reducers);