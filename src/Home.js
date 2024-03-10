import React from "react";
import "./styles.css";

function Home() {
    const homeText = "Hi, I am Harshit Mishra. I work as a Software Engineer in Warsaw, Poland. Apart from my work, I am a hobbyist deep learning researcher. \
    I have Published papers in some conferences and still working on some new ideas. "

    return (
        <div className="home-container">
            <img className="home-image" src="./profile_pic.jpg" alt="profile" width='auto' height='300px'></img>
            <p className="home-text">{homeText}</p>
            <footer></footer>
        </div>
    );

}

export default Home;