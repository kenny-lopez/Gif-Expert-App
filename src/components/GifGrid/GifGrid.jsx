import React from "react";
import useFetchGifs from "../../hooks/useFetchGifs";
import GifGridItem from "../GifGridItem/GifGridItem";
import GifGridItemLoad from "../GifGridItemLoad/GifGridItemLoad";

import "./GifGrid.css";

const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <div className="gif-grid">
                { 
                    Array.from({ length: 4 }, (_,index) => (
                        loading ? <GifGridItemLoad key={ index } /> : null
                    ))
                }
            </div>
            <div className="gif-grid">
                {
                    gifs.map(gif => (
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

export default GifGrid;