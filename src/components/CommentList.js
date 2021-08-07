import React, {Component, useState, useEffect} from 'react';
import {Button, Card} from 'reactstrap';

import RedditText from './RedditTextComponent';
import Comment from './CommentComponent';

const CommentList = (props) => {
    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(-1);
    const [maxComments, setMaxComments] = useState(5)

    useEffect(() => {
        fetch(props.commentsURL).then(res => {
        if (res.status != 200) {
            console.log("ERROR WITH COMMENTS");
            return;
        }
        res.json().then(data => {
            if (data != null) {
            setComments(data[1].data.children);
            console.log(comments);
            // loop through children and display up to 5 comments and then have a button that updates num_comments to more , use a hook
            }
        });
        })
        
    }, []);

    let commentArray = []
    for (let i = 0; i < comments.length && i < maxComments; i++) {
        commentArray.push(comments[i]);
    }

    return (
    <div className="container commentList">
        {commentArray.map( (currComment) => {
            return <Comment commentData={currComment.data}/>;
        })}
        <div className="row">
            <div className="col-12">
                <Button onClick={() => setMaxComments(maxComments+5)}>
                    Load More
                </Button>
            </div>
        </div>
    </div>
    );
}

export default CommentList;