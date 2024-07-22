import React from 'react'
import { Button } from 'reactstrap'

export default function Product(props) {
    const { cate, handleClick } = props
    return (
        <div className='product'>
            <Button
                outline
                onClick={() => handleClick(cate.title)}
                style={{
                    backgroundColor: "#fff",
                    borderRadius:"5px",
                    boxShadow: "0 7px 29px 0 hsla(240, 5%, 41%, .2)",
                    color: "#000",
                    display: "inline-block",
                    padding: "10px 20px",
                    textWrap: "nowrap"
                }}
            >
            {cate.title}
        </Button>

        </div >
    )
}
