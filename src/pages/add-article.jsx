import React, { useState } from "react";

const AddArticlePage = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: form.title, author: form.author }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="mx-80 my-10">
      <h1 className="mb-6 font-bold text-gray-900 text-2xl sm:text-4xl">
        Add an article
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-2 bg-gray-100 rounded-md"
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="p-2 bg-gray-100 rounded-md"
          type="text"
          placeholder="Author"
          value={form.author}
          name="author"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-2 bg-green-700 text-white rounded-md hover:bg-green-900"
        >
          Add
        </button>
      </form>
    </main>
  );
};

export default AddArticlePage;
