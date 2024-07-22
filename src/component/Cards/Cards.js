import React from 'react'
import {  Col, Container, Row } from 'reactstrap';
import CardItem from '../cardItem/CardItem';

export default function Cards(props) {
    const {listTours} = props
    return (
        <Container>
            <Row md={4}>
                {listTours && listTours.map((item, index) => (
                    <Col lg={3} md={3} sm={6} ><CardItem key={index} cartItem={item} /></Col>
                ))}
            </Row>
        </Container>
    )
}
