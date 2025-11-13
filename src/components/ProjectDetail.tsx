import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolioData";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  // Instant scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <section className="bg-[#121110] text-white py-12 pt-28 md:px-16">
      <Link to="/#projects" className="text-[#D1B38E] mb-6 inline-block">
        ← Back to Portfolio
      </Link>

      <h1 className="text-6xl font-neuefont-semibold mb-2">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.category}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-6xl mx-auto">
        {project.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-80 object-cover rounded-lg"
          />
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed">{project.description}</p>

      <Link to="/#projects" className="text-[#D1B38E] mb-6 mt-6 inline-block">
        ← Back to Portfolio
      </Link>
    </section>
  );
};

export default ProjectDetail;