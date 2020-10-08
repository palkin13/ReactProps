import React from "react";
import ReactDOM from "react-dom";



function Card(props) {
 return  <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img" />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
}
  ReactDOM.render(
  <div>
    <h1> My Contacts</h1>
     {/* <Card />
     <Card />
     <Card /> */}
     <Card  name ="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel= "+123 456 789" email = "b@beyonce.com"/>
     <input id ="fName" />
     <Card  name ="Palkin" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC4oa5vrecLXEL8f54bhk_LdUoHTm8JhTROg&usqp=CAU" tel= "+923 756 769" email = "p@khurana.com"/>
  </div> 
 , document.getElementById("root"));

    
