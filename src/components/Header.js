import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                <a href="#model-s">Model S</a>
                <a href="#model-3">Model 3</a>
                <a href="#model-x">Model X</a>
                <a href="#model-y">Model Y</a>
                <a href="#accessories">Acceroies</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick = {() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgarNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgarNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 10;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    aligh-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgarNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.4s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`