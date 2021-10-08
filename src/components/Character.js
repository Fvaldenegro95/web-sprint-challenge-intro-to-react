import React, { useState, useEffect } from "react";
import styled from "styled-components";


const TitleStyle = styled.h1`
font-family: 'Bebas Neue', cursive;
border: 2px dashed white;
width: 40%;
font-size: 4em;
margin-left: 30%;
text-align: center;
color: white;
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