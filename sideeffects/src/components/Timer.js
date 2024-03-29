import { useEffect, useState } from "react";

const Timer = () => {
    const[count,setCount] = useState(0);
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCount(prevoiusVal => prevoiusVal+1);
        }, 1000);
        return () => {
            console.log("Timer unmounted");
            clearInterval(timeInterval)
        }
    },[count])
    return(
    <div>
        <h1>{count} Seconds</h1>
    </div>
  )
}

export default Timer;