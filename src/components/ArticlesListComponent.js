import {Link} from 'react-router-dom' ;

const ArticlesListComponent = ( {articles} ) => {
    return (
        <>
            {articles.map(articleElement => (
                <Link key={articleElement.name} className="article-list-item" to={articleElement.name}>
                    {/* or you can link it to `/articles/${articleElement.name`} */}
                    <h3>{articleElement.title}</h3>
                    <p>{articleElement.content[0].substring(0, 150) + "...."}</p>
                </Link>
            ))}
        </>
    )
}

export default ArticlesListComponent;