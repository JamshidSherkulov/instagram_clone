import React from "react";
import Stories from "../Stories/Stories";
import './Main.css'
import Cards from '../Cards/Cards'

const Main = () => {
    return(
        <div id="main__container">
            <Stories />
            <Cards />
        </div>
    )
}

export default Main;