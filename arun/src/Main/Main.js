import React from 'react';
import Shop from './shop';
import Strip from './strip';
import Sidebar from './sidebar';
import Content from './content';

const main = () =>{
    return(
        <div>
         <Shop />
        <Strip/>
      <div class = "both">
      <Sidebar/>
        <Content/>
      </div>
        </div>
    );
}

export default main;