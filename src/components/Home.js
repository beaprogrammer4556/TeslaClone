import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                id="model-s"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                id="model-y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                id="model-3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                id="model-x"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest Cost Solar Panels in America"
                id="solar-panel"
                description="Money-backguarentee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Solar for New Roofs"
                id="solar-roof"
                description="Solar roof Costs Less Than a New Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section 
                title="Accessories"
                id="accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

