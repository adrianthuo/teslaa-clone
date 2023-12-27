import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
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
            
            title="Model s"
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
              title="Cybertruck"
              description="Order Online for Touchles Deliveries"
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
