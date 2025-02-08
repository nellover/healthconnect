import React from "react";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import "../styles/global.css";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Comment prévenir les maladies cardiaques",
      image: "article1.jpg",
      summary: "Découvrez nos conseils pour prévenir les maladies cardiaques.",
    },
    {
      id: 2,
      title: "Les bienfaits de l'exercice physique",
      image: "article2.jpg",
      summary: "L'exercice physique est essentiel pour une bonne santé.",
    },
    {
      id: 3,
      title: "Conseils pour une alimentation saine",
      image: "article3.jpg",
      summary: "Découvrez comment adopter une alimentation équilibrée.",
    },
  ];

  return (
    <div>
      <Header />
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Derniers Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
