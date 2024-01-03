  import React, {useState} from 'react'
  import styled from 'styled-components'
  import MenuIcon from '@mui/icons-material/Menu';
  import CloseIcon from '@mui/icons-material/Close';
  import Vidbg from '../Components/Electric.mp4'
  function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
      <Container>
        <a>
          <img src='/images/logo.svg' alt='logo'/>
        </a>

        <Menu>
          <a href='#'>Model s</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model x</a>
          <a href='#'>Model y</a>
          <a href='#'>Cybertruck</a>
        </Menu>
        <RightMenu>
          
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
        </RightMenu>

        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
          <CustomClose onClick={()=> setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href=''>Vehicles</a></li>
          <li><a href=''>Energy</a></li>
          <li><a href=''>Charging</a></li>
          <li><a href=''>Discover</a></li>
          <li><a href=''>Shop</a></li>
          <li><a href=''>Support</a></li>

        </BurgerNav>
        
      </Container>
    )
  }

  export default Header


  const Container = styled.div`

    min-height:60px;
    position:fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0 20px;
    top:0;
    left: 0;
    right: 0;
    z-index:1;

  `
  const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
      font=weight: 600px;
      text-transform: uppercase;
      padding : 0 10px;
      text-wrap: nowrap;
    }

    @media(max-width: 768px){
      display: none;
    }


  `

  const RightMenu = styled.div`

      display: flex;
      align-items: center;

  a{
    font=weight: 600px;
    text-transform: uppercase;
    margin-right : 10px;
    
  }

  `

  const CustomMenu = styled(MenuIcon)`

    cursor: pointer;

  `
  const BurgerNav = styled.div`
  
      position: fixed;
      top: 0;
      bottom: 0;
      right :0 ;
      background: white;
      width: 300px;
      z-index:16 ;
      list-style : none ;
      padding : 20px;
      display : flex;
      flex-direction : column;
      text-align: start;


      transform: ${props => props.show ? "translatex(0)" : "translateX(100%)"};

      li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
      }

      a{
        font-weight: 600;
      }
  
  `

  const CustomClose = styled(CloseIcon)`
  
      cursor: pointer;
      
  
  `

  const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  `