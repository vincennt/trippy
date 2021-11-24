import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';



const H1 = styled.h1`
text-decoration: none;
color : white ; 
font-size : 24px
`


const NavBar = styled.nav`
height : 60px ;
witdh : 100% ; 
background-color: #3068CF ; 
display : flex ;
align-items : center;
gap: 30px

`
const Nav = () => {
    return (
        <NavBar>
            <Link to="/" style={{ textDecoration: 'none' }}><H1>Trippy</H1></Link>
            <Link to="/favorites" ><span>☆</span></Link>
        </NavBar>
    );
};

export default Nav;
