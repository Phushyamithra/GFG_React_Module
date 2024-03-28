import { useState, useEffect } from "react";

const User = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("demo-token");  
        setLoggedIn(token === "true");
        document.title = token === "true" ? "Logout" : "Login";
        console.log(document.title);
     }, [loggedIn]);

    const login = () => {
        localStorage.setItem("demo-token", true);
        setLoggedIn(true);        
    }

    const logout = () => {
        localStorage.removeItem("demo-token");
        setLoggedIn(false);
    }

    return (
        <div>
            <h1>
                { 
                    loggedIn ? 'Welcome Back !!' : 'Please Login'
                }
            </h1>
            {
                loggedIn ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>
            }
        </div>
    )
}

export default User;
