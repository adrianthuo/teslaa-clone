import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Header from './Header'
function Home() {
  return (
    <Container>
      <Header/>
            <Section
            title="Model 3"
              description="Order Online for Touchles Deliveries"
              backgroundImg="model-3.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"
            />
            <Section
              title="Model X"
              description="Order Online for Touchles Deliveries"
              backgroundImg="model-x.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"
            
            />
            <Section
            
            title="Model S"
              description="Order Online for Touchles Deliveries"
              backgroundImg="model-s.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"
            />
            <Section
            title="Model X"
            description="Order Online for Touchles Deliveries"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"/>

            <Section
              
              backgroundImg="Cybertruck.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"/>


    </Container>
  )
}

export default Home

const Container = styled.div`
    
    height: 100vh;
   


`
