import React from "react";

import "./GifGridItem.css";

const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="gif-grid-item">
            <img key={ id } src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )

};

export default GifGridItem;