import React, {Component, useState} from 'react';
import {Button, Card, CardText, CardHeader, CardBody, CardTitle, CardFooter, Collapse} from 'reactstrap';
import RedditText from './RedditTextComponent';
import Images from './ImagesComponent';
import HighlightPop, { defaultProps } from 'react-highlight-pop';
import Translation from './TranslationComponent';
import CommentList from './CommentList';

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const Article = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasPinyin, setHasPinyin] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const togglePinyin = () => setHasPinyin(!hasPinyin);

    const commentsURL = 'https://www.reddit.com/r/' + props.subreddit + '/comments/' + props.article.id + '.json'

    return (
        <div className="article row">
            <div className="col-12">
                <HighlightPop
                    popoverItems={itemClass => (
                        <div className="highlightpop">
                            <Translation text={window.getSelection()}/>
                        </div>
                    )}>
                    <Card>
                        <CardHeader className="bg-warning">
                            <div className="row">
                                <div className="col-9 col-lg-10">
                                    {props.article.title}
                                </div>
                                <div className="col-3 col-lg-2" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                }}>
                                    <a href={props.article.url} target="_blank">
                                        <Button color="bg-primary"> 
                                            <span className="fa fa-external-link" />
                                        </Button>
                                    </a>
                                    <Button color="bg-primary" onClick={toggle}> 
                                        {isOpen ? <span className="fa fa-minus" /> : <span className="fa fa-plus" />}
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <Collapse isOpen={isOpen}>
                            <CardBody>
                                <CardText>
                                    <RedditText text={props.article.selftext}/>
                                    {/* <Images images={props.article.media_metadata}/> */}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                <div className="row">
                                    <div className="col-11" style={{display: 'flex',alignItems: 'center'}}>Comments</div>
                                    <div className="col-1" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }} > 
                                        <Button color="bg-primary btn-block" onClick = {() => setShowComments(!showComments)} style={{
                                            width:"100%"
                                        }}> 
                                            {showComments ? <span className="fa fa-minus" /> : <span className="fa fa-plus" /> }
                                        </Button>
                                    </div>
                                </div>
                                <Collapse isOpen={showComments}>
                                    { (showComments) ? <CommentList commentsURL={commentsURL} /> : <div></div> }
                                </Collapse>
                            
                                
                            </CardFooter>
                        </Collapse>
                    </Card>
                </HighlightPop>
                
            </div>
            
        </div>
    );
}

// element['data']['id']
// props.article.id
// passed to this.props from App as curr['data']
// https://www.reddit.com/r/China_irl/comments/otg5mb.json
// https://www.reddit.com/r/ + subreddit + '/comments/' + commentId + '.json'

// NEED to pass in current base_url into props
// base_url + '/comments/' + {props.article.id} + '.json'

export default Article;