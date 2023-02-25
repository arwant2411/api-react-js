import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
  
class DetailApi extends Component{
    render() {
        return (
            
            <div>
                <p>
                    Nama
                </p>
                <p><a href={`/getapi`}>Kembali</a></p>
            </div>
        )
    }
}

export default DetailApi