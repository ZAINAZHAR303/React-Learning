import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection,doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const getPosts = createAsyncThunk("product/getitems", async () => {
  try {
    const collectionRef = collection(db, "products");
    // const queryRef = query(collectionRef, where("title", "!=", "post1"), orderBy("title"), limit(3))
    // one time data read
    const docs = await getDocs(collectionRef);
    let data = [];
    console.log("docs", docs);

    docs.forEach((doc) => {
      // console.log("doc", doc.data());
      // console.log("doc id", doc.id);
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
});


export const updatePost = createAsyncThunk(
    "product/updatePost",
    async (post) => {

        try {
            const docRef = doc(db, "products", post.id)
            await updateDoc(docRef, post)
            console.log("document successfully updated! in action");
            return post;
           
        } catch (error) {
            console.log("error", error);
        }
    })

export const createPost = createAsyncThunk(
    "product/createPost",
    async (post) => {

        try {
            post.setLoading(true);
            const file = post.file;
            console.log("file", 123+file);
            const data = new FormData();
            
            data.append("file", file);
            data.append("upload_preset","ovy8w26m")
            data.append("cloud_name","dihao3fxp")
            const res = await fetch("https://api.cloudinary.com/v1_1/dihao3fxp/upload", {
                method: "POST",
                body: data,
            })
            const result = await res.json()
            console.log("result", result.url);
            const url = result.url;
         
            
            let updatedPost  = {
                // uid:post.uid,
                name: post.name,
                email: post.email,
                age: post.age,
                createdAt: new Date(),
                imageURL: url,
                fileType: post.fileType
                
            }
              // console.log("filetype in action" , post.fileType)
            const collectionRef = collection(db, "products")
            const response = await addDoc(collectionRef, updatedPost)
            console.log("response after firebase store", response);
            post.setLoading(false);
            return {...updatedPost,id:response.id}
        } catch (error) {
           
            console.log("error", error);

        }


        return post


    }
)

export const deletePost = createAsyncThunk(
    "product/deletePost",
    async (id) => {
        try {
          const docRef = doc(db, "products", id)

            await deleteDoc(docRef)
            return id;
            console.log("document successfully deleted! in action");
        } catch (error) {
            console.log("error", error);
        }
      

    }
    
  )


const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    updatePost: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateDocid : (state, action) => {
      let post = state.items.filter((post)=> post.id === action.payload)
      state.updatePost = post[0]
      console.log("updateDocid in reducer", post[0]);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items]
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id!== action.payload);
        console.log("deleted successfully in reducer");
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.items = state.items.map((post) => {
        if (post.id === action.payload.id) {
            return action.payload
        }
        return post
    })
    state.updatePost = null
    });

  },
});
export const {updateDocid} = productSlice.actions
export default productSlice.reducer;
