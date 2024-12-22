import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";







export const login = createAsyncThunk(
    'auth/login',
    async (user) => {

        try {
            console.log("user",user);
            
         const userCredential =   await signInWithEmailAndPassword(auth, user.email, user.password)
         console.log("userCredential in login",userCredential.user.uid);
         
         const docSnap = await getDoc(doc(db, "users",userCredential.user.uid))
         const dbUser = docSnap?.data()
         console.log("dbUser",dbUser);
         
         return dbUser


        } catch (error) {
             console.log("error",error);
             
        }
        
    }
)




export const signup  = createAsyncThunk(
    "auth/signup",
    async(user)=>{
        try {
            console.log("user in signup action", user);
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);


            const file = user.file;
            console.log("file", file);
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


            let saveUserTodb = {
                email: user.email,
                
                name: user.name,
                address: user.address,
                phone: user.phone,
                gender: user.gender,
                ImageURL: url,
                uid: userCredential.user.uid,
            }

            await setDoc(doc(db, "users", userCredential.user.uid), saveUserTodb);
            console.log("user saved successfully")
              return saveUserTodb
              
        }catch(error){
            console.log("error", error);
            throw error;
        }
    }
)




const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            console.log("reducer in setuser", action.payload);
            
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state,action)=>{
            console.log("action", action.payload);
            state.user = action.payload
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            console.log("action in login", action.payload);
            state.user = action.payload
        })
    }
});


export const { setUser } = authSlice.actions
export default authSlice.reducer