import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import "../cardItem/cardItem.css"

export default function CardItem(props) {
    const { cartItem } = props
    return (
        <div className='item'>
            <Card
                body
                outline
                style={{
                    width: '18rem',
                    padding: "0px",
                    position: "relative"

                }}
            >
                <div className='sale'
                    style={{
                        borderRadius: "5px",
                    }}
                >12 Off</div>
                <img
                    alt="Sample"
                    src={cartItem.img}

                />
                <CardBody>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        <i class="fa-solid fa-location-dot"></i> {cartItem.category}
                    </CardSubtitle>
                    <CardTitle tag="h5" >
                        {cartItem.title}
                    </CardTitle>
                    <CardText>
                        From <span style={{ color: "#44d7b6", fontSize: "20px", fontWeight: "500" }}>${cartItem.price}</span> to <span style={{ textDecorationLine: "line-through" }}>$250.00</span>
                    </CardText>
                    <CardText style={{ color: "yellow" }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></CardText>
                </CardBody>
            </Card>
        </div >
    )
}
