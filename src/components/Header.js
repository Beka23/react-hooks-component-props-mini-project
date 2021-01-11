import React from "react"

const { default: blogData } = require("../data/blog");

function Header(props) {
    return (
        <header>
            <h1>
                {props.name}
            </h1>
        </header>
    )
}

export default Header