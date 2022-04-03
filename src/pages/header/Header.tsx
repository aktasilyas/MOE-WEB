import React, { useEffect } from "react";

function Header(){
  const darkMode = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark", "dark");
    } else {
      localStorage.removeItem("dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      document.documentElement.classList.toggle("dark");
    }
  },[]);
  const openMenu=()=>{
    document.querySelector('.sidebar')?.classList.toggle('active')
  }
  return (
    <div className="flex border-b flex-shrink-0 dark:border-gray-800 h-14 w-full justify-between px-5 items-center">
      <button className="md:hidden" onClick={openMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="fill-current"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
      <div className="logo flex invisible md:visible">
        <a href="#" className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            className="fill-current text-blue-900"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <path d="M14.69,2.21L4.33,11.49c-0.64,0.58-0.28,1.65,0.58,1.73L13,14l-4.85,6.76c-0.22,0.31-0.19,0.74,0.08,1.01h0 c0.3,0.3,0.77,0.31,1.08,0.02l10.36-9.28c0.64-0.58,0.28-1.65-0.58-1.73L11,10l4.85-6.76c0.22-0.31,0.19-0.74-0.08-1.01l0,0 C15.47,1.93,15,1.92,14.69,2.21z" />
              </g>
            </g>
          </svg>
          MOE
        </a>
      </div>
      <form className="search w-1/3 hidden md:inline ">
        <input
          type="text"
          placeholder="Ara"
          className="w-full bg-gray-100 placeholder-gray-500 h-10 dark:bg-gray-700 dark:placeholder-gray-300 focus-within:border-gray-800 rounded px-3"
        />
      </form>
      <div className="header-footer flex">
        <div className="group relative">
          <div className="mode flex">
            <div
              className="selected-light hidden dark:inline"
              onClick={darkMode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="fill-current  mr-3 rounded-full"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
              </svg>
            </div>
            <div
              className="selected-dark inline dark:hidden"
              onClick={darkMode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="fill-current text-gray-500 dark:text-white  mr-3"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
              </svg>
            </div>
            <span className="block border-r dark:border-gray-600 mr-5"></span>
          </div>
        </div>
        <a
          href="#"
          className="hidden bg-gray-700 px-6 py-2 rounded text-white mr-5"
        >
          Giriş Yap
        </a>
        <div className="group relative">
          <button className="profile flex items-center">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEWBKYQf9oNTQ/profile-displayphoto-shrink_400_400/0/1622066936682?e=1653523200&amp;v=beta&amp;t=_XlCc0ZXI5CqJ_Yu2WngaWaqEFVnBvC0R_bQzH_PoJI"
              alt="profile"
              width={24}
              height={24}
              className="rounded-full mr-2"
            />
            <span>İlyas AKTAŞ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="fill-current"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
          <div tabIndex={0} className="absolute opacity-0 z-11 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all top-full -right-2 mt-5 p-1 w-44 rounded space-y-1 flex flex-col bg-gray-100 dark:bg-gray-800">
            <a href="#"className="text-sm flex h-7 items-center px-3 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"> Anasayfa</a>
            <a href="#"className="text-sm flex h-7 items-center px-3 rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"> Profile</a>
            <a href="#"className="text-sm flex h-7 items-center px-3 rounded transition-colors text-red-500  hover:bg-red-100 dark:hover:bg-red-300"> Çıkış yap</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
