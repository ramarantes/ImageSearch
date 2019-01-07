import './ImageList.css'
import React from 'react'


export default props => {
    const images = props.images.map(image =>{
         return <img src={image.urls.regular} key={image.id} alt={image.description}></img>
     });
    return <div className="image-list"  >{images}</div>
}