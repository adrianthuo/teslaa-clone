import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import VidBg from '../Components/Electric.mp4'

function Section({title , description ,leftBtnText,rightBtnText,backgroundImg })  {
return (
    
    

    <Wrap   src={VidBg} typeof='video/mp4' autoPlay loop muted>
        
            
                <Fade bottom>
        
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
                
            </ItemText>
            </Fade>
        <Buttons>  
        <Fade bottom>
            <ButtonGroup>
            <RightButton>
                {rightBtnText}
                </RightButton>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                
            </ButtonGroup>
           
            </Fade>
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>
            </Buttons>
    </Wrap>
    
)
}


export default Section

const Wrap = styled.div`

    width: 100vw;
    height:100vh;
    background-image: url("/images/model-3.jpg");
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgimage}")`};
    background-size: cover; /* or "contain" depending on what you want */
    background-position: center center;
    background-repeat: no-repeat;
    

`
const ItemText = styled.div`

    padding-top: 15vh;
    text-align:center;
    margin-bottom: 30px;


`

const ButtonGroup = styled.div`
    
    display: flex;
    @media (max-width: 768px) {

        flex-direction: column;

    }

`

const LeftButton = styled.div`
    background-color: rgba(23 ,26, 32, 0.8);
    height: 40px;
    width:256px;
    color: white;
    display : flex;
    justify-content: center;
    align-items:center;
    border-radius: 10px;
    opacity:0.85;
    text-transform:uppercase;
    font-size : 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
        background: white;
        opacity: 0.65;
        color: black ;
`

const DownArrow = styled.img`


    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`



`


