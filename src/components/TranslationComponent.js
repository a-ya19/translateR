import React, { Component, useState, useEffect } from 'react';

import { useLazyTranslate } from 'react-google-translate';

const Translation = (props) => {

    let pinyin = require('pinyin');
    let pinyinArray = pinyin(String(props.text));
    
    return (
        <div className="translation">
            <div className="pinyin">
                {pinyinArray.join(' ')}
            </div>
        </div>
    );
}

export default Translation;