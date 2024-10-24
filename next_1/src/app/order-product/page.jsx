"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("order placed");
    router.push("/");
  };
  return (
    <div>
      <h1>order product</h1>
      <Link href={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          place order
        </button>
      </Link>
      <br />
      <br />
      <br />
      <h1>place order</h1>
      <button
        onClick={handleClick}
        className="bg-black text-white p-4 rounded-md ">
        Place order
      </button>
    </div>
  );
};

export default page;
