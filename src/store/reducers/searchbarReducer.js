import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    ipAddress: '',
    location: '',
    timezone: '',
    isp:'',
    lat: 0,
    lad: 0,
    loading: null,
    error: null
}

const searchbarReducer = createSlice({
    name: 'searchdata',
    initialState: initialState,
    reducers: {
        addone(state, action){
            state.ipAddress = action.payload
        },
        addtwo(state, action){
            state.location = action.payload
        },
        addthree(state, action){
            state.timezone = action.payload
        },
        addfour(state, action){
            state.isp = action.payload
        },
        addLat(state, action){
            state.lat = action.payload
        },
        addLad(state, action){
            state.lad = action.payload
        }, 
        addloading(state, action){
            state.loading = action.payload
        },
        adderror(state, action){
            state.error = action.payload
        }
    }
})

const searchbarActions = searchbarReducer.actions;
export{ searchbarReducer, searchbarActions};