import React, { useEffect, useState } from "react";
import getGifs from "../../helpers/getGifs";
import GifGridItem from "../GifGridItem/GifGridItem";

import "./GifGrid.css";

const GifGrid_Alt = ({ category }) => {

    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs(category)
            .then(data => {
                setImage(data);
                setLoading(false);
            });
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            {loading ? <p>Loading...</p> : null}
            <div className="gif-grid">
                {
                    image.map(gif => (
                        <GifGridItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                }
            </div>
        </>
    )
};

export default GifGrid_Alt;