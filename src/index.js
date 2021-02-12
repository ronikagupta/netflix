// props
import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import "./index.css";
import Sdata from "./Sdata";
//  self custome attribute called props

function ncard(val){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
    )

}
ReactDom.render(
  <>
   <h1 className="heading_style"> List of top 5 Netflix series in 2020</h1>
   
   { Sdata.map(ncard)}
     
</>,

document.getElementById('root')  
);