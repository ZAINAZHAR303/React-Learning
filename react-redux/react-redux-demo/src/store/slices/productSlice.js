import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("data in fetchProducts action", data)
    return data;
  }
);
export const deleteProductAction = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response =await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
   const data = await response.json();
   console.log("data in deleteProduct action", data);
   return data;
  }
)
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {

    deleteProduct: (state,action)=>{
      let id = action.payload;
      let filteredProducts = state.products.filter(product=>product.id !== id);
      state.products = filteredProducts;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        console.log("fetch products in reducer", action.payload)
      state.products = action.payload;
    });
    builder.addCase(deleteProductAction.fulfilled, (state, action) => {
        console.log("delete product in reducer", action.payload)
        let id = action.payload.id;
        let filteredProducts = state.products.filter(product=>product.id!== id);
        state.products = filteredProducts;
      // state.products = state.products.filter(product=>product.id!== action.payload.id);
    });
  },
});

export const { setProducts,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
