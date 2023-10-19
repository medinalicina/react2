import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
const navigate = useNavigate();

    return <div><h1>this is HomePage</h1>
    { <Link to={"/about"}>IDI NA ABOUT PAGE</Link> }
    <button onClick={()=> navigate("/about")}>ABOUT</button>
    </div>
}
 
export default HomePage;