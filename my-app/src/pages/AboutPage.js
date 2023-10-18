import React from 'react';
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div>
        <h1>THIS IS ABOUT US PAGE</h1>
        <Link to={"/home"}>IDI NA HOME PAGE</Link>
    </div>
  );
}

export default AboutPage