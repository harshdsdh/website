import React from "react";
import "./styles.css";

function Home() {
    const homeText = "Hi, I am Harshit Mishra. I am a PhD student at Syracuse Univeristy. My interest lies in social media networks. And ways to mitigate Bias in online spaces."

    return (
        <div className="home-container">
            <img className="home-image" src="./profile_pic.jpg" alt="profile" width='auto' height='300px'></img>
            <p className="home-text">{homeText}</p>
            <footer></footer>
        </div>
    );

}

export default Home;