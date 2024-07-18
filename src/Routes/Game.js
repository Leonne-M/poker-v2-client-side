import React, { useState } from "react";
function Game(){
    const [playerhand,setPlayerhand]=useState([])
    const [computerhand,setComputerhand]=useState([])
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const raw = "";

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://127.0.0.1:5000/get_cards", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)

})
  .catch((error) => console.error(error));

}


export default Game