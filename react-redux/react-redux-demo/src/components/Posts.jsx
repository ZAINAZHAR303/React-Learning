import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Posts = () => {
  const postslist = useSelector((store) => store.postSlice.posts);
  const renderedPosts = postslist.map((post) => (
    <article key={post.id}>
      <h2>{post.catagory}</h2>
      <p>{post.name}</p>
    </article>
  ));

  return <div>
    {renderedPosts}
  </div>;
};

export default Posts;
