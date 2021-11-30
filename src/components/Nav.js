import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    color : white ; 
    font-size : 24px;
    margin: 25px;
`

const NavBar = styled.nav`
    height : 60px ;
    witdh : 100% ; 
    background-color: #3068CF ; 
    display : flex ;
    align-items : center;
    gap: 30px;
    position: sticky;
    top: 0;
    z-index: 10;
`
const Nav = () => {
    return (
        <NavBar>
            <Link to="/" style={{ textDecoration: 'none' }}><H1>Trippy</H1></Link>
            <Link to="/favorites" ><FaStar color="white" margin-top="10px"  padding="25px" size="20px"/></Link>
        </NavBar>
    );
};

export default Nav;
