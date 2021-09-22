import React, { useEffect, useState } from "react";
import Article from "../components/article";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setArticles(res))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (article) => {
    fetch(`/api/articles/${article._id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        setArticles(articles.filter((article) => article._id !== res._id));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="mx-80 my-10">
      <h1 className="mb-6 font-bold text-gray-900 text-2xl sm:text-4xl">
        Articles
      </h1>

      <div className="flex flex-wrap gap-2">
        {articles.map((article) => (
          <div key={article._id} className="group relative flex-1">
            <Article article={article} />
            <span
              className="absolute top-2 right-4 cursor-pointer opacity-0 group-hover:opacity-100"
              onClick={() => handleDelete(article)}
            >
              &#10005;
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticlesPage;
