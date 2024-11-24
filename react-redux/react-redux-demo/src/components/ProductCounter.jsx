import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/slices/productSlice";
import { useEffect } from "react";
import { deleteProduct, deleteProductAction } from "../store/slices/productSlice";

const ProductCounter = () => {
  const products = useSelector((store) => store.productSlice.products);

  const dispatch = useDispatch();
  console.log("products in comp", products);

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  const onClickDeleteProduct= (id)=>{
    console.log("delete product id" , id)
    dispatch(deleteProductAction(id));
  }

  return (
    <div className="grid grid-cols-2 gap-4 ">
      {/* <button onClick={onClickGetProducts}>GEt products</button> */}
      {products?.map((item) => (
        <section key={item.id} className="border-[2px] w-[300px] flex flex-col items-center justify-center ">
          <img src={item.image} className="h-[200px] w-[200px] border-[2px]" alt="image" />
          <h2 className="text-[20px] font-bold ">{item.title}</h2>
          <p>{item.description}</p>
          <p className="font-bold text-orange-400">$ {item.price}</p>
          <div className="flex gap-2">
          <button className="bg-red-400 text-white rounded-md p-2 " onClick={()=>onClickDeleteProduct(item.id)}> Delete</button>
          <button>Update</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductCounter;
