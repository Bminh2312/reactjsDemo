import React from 'react'
import { Button } from 'reactstrap'

export default function Product(props) {
    const { cate, handleClick, city } = props
    return (
        <div className='product'>
            <Button
                outline
                onClick={() => handleClick(cate.title)}
                style={{
                    backgroundColor: city == cate.title?"#20c997":"#fff",
                    borderRadius:"5px",
                    boxShadow: "0 7px 29px 0 hsla(240, 5%, 41%, .2)",
                    color: city == cate.title? "#fff":"#000",
                    display: "inline-block",
                    padding: "10px 20px",
                    textWrap: "nowrap",
                    fontWeight: "500",
                    border: "none"
                }}
            >
            {cate.title}
        </Button>

        </div >
    )
}
