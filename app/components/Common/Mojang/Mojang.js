import React from 'react';
import webview from 'electron';


function Mojang(props) {

  return (
    <webview src='https://account.mojang.com/me' style = {{height:"100vh"}} />
  );
}

export default Mojang;

