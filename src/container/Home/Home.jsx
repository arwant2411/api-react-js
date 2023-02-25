import React, {Component} from "react";

class Home extends Component{
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Halaman Awal</p>
                <nav>
                    <ul>
                        <li><a href={`/`}>Your Name</a></li>
                        <li><a href={`/getapi`}>Get API</a></li>
                        <li><a href={`/getblog`}>Get Blog</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Home