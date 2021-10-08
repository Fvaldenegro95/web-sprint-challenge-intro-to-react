import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const kf2 = keyframes`
0% {
    color: #6666ff;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {
    color: #ff3399;
  }
  100% {
    color: #6666ff;
  }
}
`
const kf = keyframes`
0% {
    background-color: #6666ff;
  }
  10% {
    background-color: #0099ff;
  }
  50% {
    background-color: #00ff00;
  }
  75% {
    background-color: #ff3399;
  }
  100% {
    background-color: #6666ff;
  }
}
`


const TitleStyle = styled.h1`
font-family: 'Bebas Neue', cursive;
border: 2px dashed white;
width: 40%;
font-size: 4em;
margin-left: 30%;
text-align: center;
color: white;
&: hover {
    animation: ${kf} 1s infinite;
    }
`

const BigStyle = styled.div`
font-family: 'Bebas Neue', cursive;
padding: 2rem;

`
const InfoStyle = styled.div`
    border: 2px dashed white;
    width: 20%;
    margin-left: 40%;
    color: white;

    &: hover {
    animation: ${kf2} 1s infinite;
    }
`



export default function Character({info}){
    const [visible, setVisible] = React.useState(false);

    return (

            <BigStyle>
            
            <TitleStyle onClick={() => setVisible(!visible)}>
                {info.name}
                {visible ? '' : ''}          

            </TitleStyle>
            <InfoStyle>
            {visible && <div>
            <p>Gender: {info.gender}</p>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Birth Year: {info.birth_year}</p>
            <p>Eye Color: {info.eye_color}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
            </div>}
            </InfoStyle>

            </BigStyle>

    )
}