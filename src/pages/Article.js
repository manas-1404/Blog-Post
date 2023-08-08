import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import articles from "./article-content";
import NotFoundPage from "./NotFound";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";


const Article = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes : 0, comments: []})

    // params is actually an object, and the articleId is the key, and the value of the object is the string attached to the key
    const params = useParams();
    // accessing the key of the object using props (here articleId)
    const articleId = params.articleId;

    useEffect( () => {
        //can't add asyn as first argument to useEffect, so created a new function
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        loadArticleInfo();
    }, [articleId]);



    //accessing the article using the articleId
    const article = articles.find(articleElement => articleElement.name === articleId);


    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    //if the articleId isn't present, then we display the not found page
    if(!article){
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                <button onClick={ addUpvote }>Upvote</button>
                <p>This article has {articleInfo.upvotes} upvote(s)</p>
            </div>
            {/* accessing each paragraph present in the article */}
            {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
            ))}
            <AddCommentForm 
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            <CommentsList comments={articleInfo.comments}/>
        </>
    );
}

export default Article;