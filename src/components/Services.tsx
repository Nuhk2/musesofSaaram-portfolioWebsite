import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Portrait Photography",
      description:
        "Capturing emotions and personalities through expressive and creative portrait sessions."
    },
    {
      title: "Landscape Photography",
      description:
        "Freezing breathtaking sceneries and natural beauty with attention to light and detail."
    },
    {
      title: "Event Photography",
      description:
        "Documenting important moments at weddings, concerts, and events with a storytelling approach."
    },
    {
      title: "Photo Editing",
      description:
        "Enhancing images professionally to achieve a polished and artistic finish."
    }
  ];

  return (
    <section className="px-6 sm:px-12 md:px-48 py-20 text-[#d8b26e] font-neue ">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        My Services
      </h2>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#262626] rounded-2xl p-6 hover:bg-[#d8b26e] hover:text-[#1a1a1a] transition-colors duration-300 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
