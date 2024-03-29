import { useEffect, useState } from "react";

const Timer = () => {
    const[count,setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount(count+1);
        }, 1000);
      
    },[])
    return(
    <div>
        <h1>{count} Seconds</h1>
    </div>
  )
}

export default Timer;