import React from 'react'

export const GifGridItem = ({ url, title }) => {

    // console.log( props );



    return (
        <div className="card">
            <img src={ url } alt={ title} />
            <p> { title } </p>
        </div>
    )
}
