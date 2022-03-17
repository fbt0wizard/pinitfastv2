import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../slices/allDataSlice';
import dataUploadSlice from '../slices/imageAndDocSlice';
import alertSlice from '../slices/alertSlice';
import authSlice from '../slices/authySlice';
import handleHeight from '../slices/handleAutoHeight';
import ThemeSlice from '../slices/ThemeSlice';

export const store = configureStore({
    reducer: {
        allData: dataSlice,
        dataUpload: dataUploadSlice,
        alert: alertSlice,
        auth: authSlice,
        height: handleHeight,
        theme: ThemeSlice

    }
})