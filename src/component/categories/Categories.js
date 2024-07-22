
import React from 'react'
import Product from '../product/Product'
import { Container, Row } from 'reactstrap'


export default function Categories(props) {
    const { listCateTours, handleClick, city } = props

    return (
        <Container>
            <div style={{width:"40%", margin: "20px auto"}}>
            <Row md={4}>
            {listCateTours && listCateTours.map((item, index) => (<Product key={index} cate={item} handleClick={handleClick} city = {city} />))}
            </Row>
            </div>           
        </Container>
    )
}
