import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    min-width: 1440px;
    height: 80px;
    padding: 5px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `

export const Link = styled(NavLink)`
    color: ${({ active }) => active ? 'black' : 'white'};
    background-color: ${({ active }) => active ? 'white' : 'none'};
    box-shadow: 
    ${({ active }) => 
    active ? 
    '0px 0px 20px white,0px 0px 50px white' 
    :
     'none'};
    font-size: 25px;
    font-weight: 900;
    font-family: sans-serif;
    text-decoration: none;
    padding: 7px 15px;
    border-radius: 25px;
    transition: .7s;
    :hover{
            background-color: white;
            color: black;
            box-shadow:0px 0px 20px white,
            0px 0px 50px white, 
            0px 0px 70px white,
             0px 0px 100px white;
        }
`