import React from "react";
import "../styles/global.css";
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.summary}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Lire la suite
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
