import React, { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";

import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaRegEyeSlash } from "@react-icons/all-files/fa/FaRegEyeSlash";
import { AiOutlineLock } from "@react-icons/all-files/ai/AiOutlineLock";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";


export default function Login() {
  const [showEye,setShowEye]=useState(false);

  const changeShowEye=()=>{
    setShowEye(!showEye);
  }
  return (
    <div className="w-full h-full">
      <header className="w-full h-15 z-10 bg-white border-b drop-shadow flex-shrink-0 px-3 py-2 fixed flex justify-between">
        <a href="#" className="p-2 inline-flex justify-center items-center gap-2 rounded">
          <span className="w-4 h-4 bg-blue-500 rounded-full"></span>{" "}
          <span className="font-extrabold text-gray-500">MOE</span>
        </a>
        <div className="p-2 flex gap-2">
          <a href="#" className=" flex justify-center items-center transition-all py-4 px-3  rounded text-blue-500 hover:bg-blue-500 hover:text-white text-md">
            Giriş Yap
          </a>
          <a href="#" className="py-4 px-3 flex justify-center items-center transition-all rounded bg-blue-500 text-md text-white hover:bg-inherit hover:text-blue-500">
            Üye OL
          </a>
        </div>
      </header>
      <main className="flex justify-center  items-center w-full h-full">
        <div className="w-[500px] h-[500px] bg-white  drop-shadow-xl justify-evenly rounded-md  items-center flex flex-col gap-2 px-15">
          <div className="w-full flex justify-center items-center">
            <h1 className="font-extrabold text-gray-500  text-lg">
              Hesabınıza Giriş Yapın
            </h1>
          </div>
          <form className="flex flex-col w-full gap-4" autoComplete="off" autoCorrect="off">
            <div className="w-full bg-blue-100 rounded flex justify-between items-center px-2 ">
            
            <span className="bg-blue-100">
                <AiOutlineMail size={24} className="text-gray-500"/>
              </span>
              <input
                type="text"
                className="bg-transparent outline-none placeholder:text-gray-500 placeholder:font-semibold  rounded p-2 text-md  w-full"
                placeholder="Kullanıcı Adı"
              />
            </div>
            <div className="w-full bg-blue-100 rounded flex justify-between items-center px-2 ">
              <span className="bg-blue-100">
                <AiOutlineLock size={24} className="text-gray-500"/>
              </span>
              <input
                type={showEye?'text':'password'}
                autoComplete="off"
                className=" bg-transparent outline-none p-2 text-md  w-full placeholder:text-gray-500 placeholder:font-semibold "
                placeholder="Şifre"
              />
             {showEye?(<FaEye size={24} onClick={changeShowEye} className="text-gray-500" />):(<FaRegEyeSlash size={24}  onClick={changeShowEye} className="text-gray-500" />)} 
            </div>
            {/* <Link to="/Dashboard"> */}
            <button className="bg-cyan-600  hover:bg-cyan-800  transition-all rounded-md p-3 text-lg w-full font-semibold text-white">
              Giriş Yap
            </button>
            {/* </Link> */}
           
          </form>
          <div className="flex flex-row w-full border-t justify-center items-center py-3">

            <a href="#" className="p-1 rounded-full  flex justify-center items-center gap-3">
              <AiFillInstagram size={24}  className="text-gray-500"/>
              <AiFillFacebook size={24}  className="text-gray-500"/>
              <AiFillLinkedin size={24}  className="text-gray-500"/>

            </a>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100  drop-shadow-2xl h-40 w-full flex justify-around items-center flex-shrink-0">
       <a href="#" className=" h-30 p-3 rounded bg-gray-200 drop-shadow-xl text-blue-500 font-semibold flex justify-center items-center">
         iletişim
       </a>
       <a href="#" className=" h-30 p-3 rounded bg-gray-200 drop-shadow-xl text-blue-500 font-semiboldflex justify-center items-center">
         Hakkmızda
       </a>
       <a href="#" className=" h-30 p-3 rounded bg-gray-200 drop-shadow-xl text-blue-500 font-semiboldflex justify-center items-center">
         Neler yapıyoruz
       </a>
      </footer>
    </div>
  );
}
