import React from "react";
import Switch from '@material-ui/core/Switch';
import Brightness6Icon from '@material-ui/icons/Brightness6';
function handleDarkMode(){
  const body=document.querySelector('body');
  body.classList.toggle('dark');
  const head=document.querySelector('header');
  head.classList.toggle('dark');
  const cal=document.querySelector('.calc');
  cal.classList.toggle('dark');

}

function Header() {
  return (
    <header>
      <h1>Simple Calculator | React</h1>
      <h3 class="toggle"> <Brightness6Icon /> <Switch onClick={handleDarkMode}/></h3>
    </header>
  );
}

export default Header;
