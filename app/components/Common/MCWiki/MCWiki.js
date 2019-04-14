import React from 'react';
import webview from 'electron';


function MCWiki(props) {

  return (
    <webview src='https://minecraft.gamepedia.com/Minecraft_Wiki' style = {{height:"100vh"}} />
  );
}

export default MCWiki;

