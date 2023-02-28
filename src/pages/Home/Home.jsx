import React from "react";
import './Home.css'
import Suggestion from "../../components/Suggestion/Suggestion";
import Main from "../../components/Main/Main";


const Home = () => {
    return(
        <div id="home__container" className="border">
            <Main />
            <Suggestion />
        </div>
    )
}

export default Home;