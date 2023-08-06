import { useParams } from "react-router-dom";

import articles from "./article-content";
import NotFoundPage from "./NotFound";


const Article = () => {

    // params is actually an object, and the articleId is the key, and the value of the object is the string attached to the key
    const params = useParams();

    // accessing the key of the object using props (here articleId)
    const articleId = params.articleId;

    //accessing the article using the articleId
    const article = articles.find(articleElement => articleElement.name === articleId);

    //if the articleId isn't present, then we display the not found page
    if(!article){
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            {/* accessing each paragraph present in the article */}
            {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
            ))}
        </>
    );
}

export default Article;