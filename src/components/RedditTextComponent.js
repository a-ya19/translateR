import React, {Component} from 'react';

class RedditText extends Component {
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
            <div>{text}</div>
        );
    }
}

export default RedditText;