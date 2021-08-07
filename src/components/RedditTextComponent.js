import React, {Component, useState} from 'react';
import { Card, CardHeader, Button } from 'reactstrap';

import CommentList from './CommentList';

class RedditText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComments: false
        }
    }

    renderText() {
        let urlRegex = /(\(https?:\/\/[^\s]+)/g;
        let parts = this.props.text.split(urlRegex); // re is a matching regular expression
        for (let i = 1; i < parts.length; i += 2) {
            parts[i] = <a key={'link' + i} href={parts[i]}>[Link]</a>;
        }
        return parts
    }

    render() {
        let text = this.renderText()
        return (
            <div>
                {text}
            </div>
        );
    }
}

export default RedditText;