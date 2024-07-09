import React from "react";
import logo from "../logo.jpg";
import "./App.css"
import { getFooterCopy, getFullYear, getLatestNotification } from "../utils";
import { Notifications  } from "../Notifications"

export default function App () {
    return(
        <>
        <Notifications />
        <div className="App-header">
            <img src={logo} width="200" height="200"></img>
            <h1>School dashboard</h1>
        </div>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input id="email" type="email"/>
        
        <label htmlFor="password">Password: </label>
        <input id="password" type="password"/>
        <button>OK</button>

        </div>
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>

        </>
    )
}