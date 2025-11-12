import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";

const ImageGallery = () => {
  const images = [
    { src: img1, caption: "Forest Morning" },
    { src: img2, caption: "City Scapes" },
    { src: img3, caption: "Nature Scapes" },
    { src: img4, caption: "Flowers in the Bloom" },
  ];

  // Slight random rotation per image for natural layout
  const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"];

  return (
    <div className="flex flex-wrap  justify-center gap-6 px-4">
      {images.map((item, index) => (
        <div
          key={index}
          className={`
            bg-[#dbcfa8]
            shadow-lg
            rounded-md
            p-3 pb-8
            w-full sm:w-[45%] md:w-[40%] lg:w-[22%]
            max-w-[280px]
            transform transition-transform duration-500
            hover:-translate-y-2 hover:rotate-1
            ${rotations[index % rotations.length]}
          `}
        >
          <img
            src={item.src}
            alt={item.caption}
            className="rounded-sm w-full h-auto object-cover border border-gray-300"
          />
          <p
            className="text-center text-xl font-medium mt-4 text-[#423302] font-[Pacifico]"
          >
            {item.caption}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
