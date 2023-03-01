import axios from "axios";
import React, {useState, useEffect} from "react";
import './Suggestion.css'

const Suggestion = () => {

    const[suggested, setSuggested] = useState([]);

    useEffect(() => {
        axios.get('https://63f32f51fe3b595e2edc6810.mockapi.io/users')
            .then(res => setSuggested(res.data))
            .catch(err => console.log(err))
    })

    return(
        <div id="suggestion__container" className="border">
            <div id="suggested__container" className="mt-5">
                {
                    suggested.map((item, index) => {
                        return(
                            <div id="single__suggested">
                                <div>
                                    <img src={item.avatar} alt={item.name} />
                                </div>
                                <p>{item.name}</p>
                                <p>Follow</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Suggestion;