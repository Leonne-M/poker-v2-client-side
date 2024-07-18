import React, { useState, useEffect,useContext} from "react";
import Computer from "./computerhand";
import Player from "./playerhand";
import APPCONTEXT from "../AppContext";

function Game() {
  const { token } = useContext(APPCONTEXT);
    const [playerhand, setPlayerhand] = useState([]);
    const [computerhand, setComputerhand] = useState([]);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://127.0.0.1:5000/get_cards", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPlayerhand(result.player_hand);
                setComputerhand(result.computer_hand);
            })
            .catch(error => console.error(error));
    }, [token]); 
  
const handleChange=(card)=>{
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const raw = JSON.stringify({
    id: card.id,
    rank: card.rank,
    suits: card.suits
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://127.0.0.1:5000/player_moves", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      setPlayerhand(result)

    })
    .catch((error) => console.error(error));

 handleChangeB()
    }
const handleChangeB=()=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://127.0.0.1:5000/computer_moves", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    setComputerhand(result)
  })
  .catch((error) => console.error(error));

}
    return (
        <div className="game">
            <Computer computerhand={computerhand}/>
           <Player playerhand={playerhand} handleChange={handleChange}/>
        </div>
    );
}

export default Game;

