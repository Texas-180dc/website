import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import skylineImage from '../assets/skyline.jpg'

const Styles = styled.div`
    .jumbo {
        background: url(${skylineImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div classNames="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>We are 180 degrees.</p>
            </Container>
        </Jumbo>
    </Styles>
)