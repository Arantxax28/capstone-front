import {useState, useEffect} from "react";

const Countdown = (props) => {
    const [list, setList] = useState([])

    const expiringSoon = () =>{
        if(props.daysLeft<=30){
            return props.name;
        }
    }
    console.log(expiringSoon())
    return (
        <div>
            hello
        </div>
    )
}
export default Countdown;