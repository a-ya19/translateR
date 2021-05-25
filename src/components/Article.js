import React, {Component, useState} from 'react';
import {Button, Card, CardText, CardHeader, CardBody, CardTitle, Collapse} from 'reactstrap';
import RedditText from './RedditTextComponent';
import Images from './ImagesComponent';
import HighlightPop from 'react-highlight-pop';
import Translation from './TranslationComponent';

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const Article = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasPinyin, setHasPinyin] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const togglePinyin = () => setHasPinyin(!hasPinyin);

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
                            <div className="row row-header">
                                <div className="col-11">
                                    {props.article.title}
                                </div>
                                <div className="col-1" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} > 
                                    <Button color="bg-primary" onClick={toggle}> <span className="fa fa-plus" /> </Button>
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
                        </Collapse>
                    </Card>
                </HighlightPop>
                
            </div>
            
        </div>
    );
}

// function Article(props) {
//     return (
//         <div className="article row">
//             <div className="col-12">
//                 <Card>
//                     <CardHeader className="bg-warning">
//                         <div className="row row-header">
//                             <div className="col-11">
//                                 {props.article.title}
//                             </div>
//                             <div className="col-1"> 
                                
//                             </div>
//                         </div>
                        
//                     </CardHeader>
//                     <CardBody>
//                         <CardText>
//                             {props.article.selftext}
//                         </CardText>
//                     </CardBody>
//                 </Card>
//             </div>
            
//         </div>
//     );
// }

export default Article;