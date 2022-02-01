

import { setupListeners } from "@reduxjs/toolkit/query";


import { filterReducer } from './fiter/reducer';
import { configureStore} from "@reduxjs/toolkit";
import { contactApi } from './contactApi';


export const store = configureStore({
    reducer: {
        filter: filterReducer,
        [contactApi.reducerPath]: contactApi.reducer,
    } ,
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactApi.middleware,

    ]

})

setupListeners(store.dispatch)


// getDefaultMiddleware,


