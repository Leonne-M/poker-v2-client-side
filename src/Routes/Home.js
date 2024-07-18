import { useNavigate } from "react-router-dom"
const navigate=useNavigate()
function  Home(){
const handleRedirect=()=>{
    navigate("/game")
}

    return(
        <div>
            <h1>
                Welcome PLayer
            </h1>
            <button onClick={handleRedirect}>Play</button>
        </div>
    )
}
export default Home