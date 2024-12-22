import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  deletePost,
  updateDocid,
} from "../store/slices/productSlice";
import Button from "./Button";

const Navbar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.items);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const deleteHandler = (id) => {
    console.log("deletefunction");
    console.log("id", id);
    dispatch(deletePost(id));
  };
  const updateHandler = (id) => {
    console.log("updatefunction");
    console.log("id", id);
    dispatch(updateDocid(id));
    // dispatch(updatePost(id)) //update post logic goes here
  };
  return (
    <div className="flex items-center flex-col">
      <h1>Products</h1>
      {products &&
        products.map((post) => {
          return (
            <div
              key={post.id}
              className="flex border-1 rounded-md bg-slate-200 mb-4 justify-between w-[500px] py-2 px-8 ">
              {post.imageURL &&
              (
                post.fileType === "image/jpeg" ?(
                  <img src={post.imageURL} alt="Product Image" />
                ):(
                  <video src={post.imageURL} controls autoPlay loop muted></video>
                )
              )
        }

          

              <h1>{post.name}  - { post?.createdAt?.seconds ? new Date(post?.createdAt?.toDate()).toLocaleDateString() : new Date(post?.createdAt).toLocaleDateString()} - {post.uid}</h1>
              <p>{post.email}</p>
              <p>{post.age}</p>

              <button onClick={() => deleteHandler(post.id)}>Delete</button>
              <button onClick={() => updateHandler(post.id)}>Update</button>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;
