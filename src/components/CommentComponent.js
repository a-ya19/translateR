import React from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';

const Comment = (props) => {
    console.log(props.commentData);
    return (
        <Card className="comment">
            <CardBody>
                <div className="row">
                    <div className="col-12">
                        <a href={"http://www.reddit.com" + props.commentData.permalink}>{
                        props.commentData.author}
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {props.commentData.body}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default Comment;