import { useNavigate } from "react-router-dom"
const navigate=useNavigate()
function  Home(){
const handleRedirect=()=>{
    navigate()
}

    return(
        <div>
            <h1>
                Welcome PLayer
            </h1>
            <button>Play</button>
        </div>
    )
}
export default Home