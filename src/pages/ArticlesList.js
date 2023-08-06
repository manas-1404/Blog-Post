import articles from './article-content';
import ArticlesListComponent from '../components/ArticlesListComponent';

const ArticleList = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesListComponent articles={articles} />
        </>

    );
}

export default ArticleList;