import React from "react";

const Article = ({ article }) => {
  return (
    <article className="w-80 p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200">
      <h4 className="text-lg font-bold">{article.title}</h4>
      <p className="text-gray-500">by {article.author}</p>
    </article>
  );
};

export default Article;
