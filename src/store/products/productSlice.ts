
// interface IPRODUCTS {
//     productsResponse: any,
//     isLoading: boolean,
//     isError: boolean,
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    productsResponse: {},
    isLoading: false,
    isError: false,
}

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productsResponse = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isError = true;

        })
    }
})

export default productSlice.reducer