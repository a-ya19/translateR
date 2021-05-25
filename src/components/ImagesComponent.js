import React, {Component, useState} from 'react';
import Image from './ImageComponent';

const Images = (props) => {
    if (props.images != null) {
        const images = props.images.map((image) => (
            <div>
                <Image url={image.s}></Image>
            </div>
        ));
        return images;
    }

    return null;
}

export default Images;