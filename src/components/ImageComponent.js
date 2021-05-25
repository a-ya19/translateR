import React from 'react';

const Image = (props) => {
    const newUrl = props.url.replace('&amp;', '&');
    return (
        <div>
            <img src={newUrl} alt="Image Missing">
            </img>
        </div>
    );
};

export default Image;