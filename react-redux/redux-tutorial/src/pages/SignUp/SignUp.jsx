import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signup} from "../../store/slices/authSlice"
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
    const[file,setFile] = useState("");


    const dispatch = useDispatch();
  const signupHandler = (e) => {
    e.preventDefault();
    let user = {
      name,
      email,
      password,
      address,
      phone,
      gender,
    };
    console.log(file)
    console.log(user);
    dispatch(signup({...user,file}));
  };
  return (
    <div>
      <h2>Signup page</h2>
      <form className="flex flex-col p-2 gap-2">
        <input
          className="border-2 p-2 "
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 p-2 "
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 p-2 "
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border-2 p-2 "
          type="text"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="border-2 p-2 "
          type="text"
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label>female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])}  />
        <button onClick={signupHandler}>Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
