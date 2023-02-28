import React, { useState, useEffect } from "react";
import './Stories.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


const Stories = () => {

    const[users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://63f32f51fe3b595e2edc6810.mockapi.io/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err, 'Error occured'))
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };


    return(
        <div id="stories__container" className="border">
            <Slider  {...settings}>
                {
                    users.map((user, index) => {
                        return(
                            <div id="stories__avatar" key={index}>
                                <img src={user.avatar} alt="" />
                                <p id="usernames">{user.name}</p>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Stories;