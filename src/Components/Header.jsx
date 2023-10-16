import React from "react";
import { changeTheme } from "../utils/themeProvider";
import { UilSearch,UilMoon  } from '@iconscout/react-unicons';
import DropDown from "./DropDown";

export default function Header() {
  function handleTheme(){
    const root=document.getElementById('root')
    changeTheme(root)
  }
  return (
    <div className="flex flex-row justify-evenly items-center text-textcolor mt-3">
      <div className="flex flex-row gap-5">
        <a className="links" href="#">
          Tags
        </a>
        <a className="links" href="#">
          Authors
        </a>
          {<DropDown title={'Posts'} items={['zarp','zarp','zarp','zarp','zarp','zarp']}/>}
        <a className="links" href="#">  
          Membership
        </a>
        <a className="links" href="#">
          Contac
        </a>
        {<DropDown title={'About'} items={['zarp','zarp','zarp','zarp','zarp','zarp']}/>}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <button>
          < UilSearch 
          className={'text-textcolor'}
          />
        </button>
        <button
        onClick={handleTheme}>
          <UilMoon className={'text-textcolor'} />
        </button>
        <a className="links" href="#">
          Login
        </a>
        <button
        className="bg-gradient-to-r from-cyan-400 to-purple-600 px-3 rounded-full">
          <a href="#" className="text-white">Sign In</a>
        </button>
      </div>
    </div>
  );
}
