import React, { useEffect, useState } from "react";
import Article from "../components/article";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setArticles(res))
      .catch((err) => console.log(err));
  });

  return (
    <main className="mx-80 my-10">
      <h1 className="mb-6 font-bold text-gray-900 text-2xl sm:text-4xl">
        Articles
      </h1>

      <div>
        {articles.map((article) => (
          <Article article={article} />
        ))}
      </div>
    </main>
  );
};

export default ArticlesPage;
