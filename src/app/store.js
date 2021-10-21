import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sedeReducer from '../features/sede/sedeSlice';
import familiaReducer from '../features/familia/familiaSlice';
import loadingReducer from '../features/loading/loadingSlice';
import globalReducer from '../features/global/globalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sede:sedeReducer,
    familia:familiaReducer,
    loading:loadingReducer,
    global:globalReducer
  },
});
