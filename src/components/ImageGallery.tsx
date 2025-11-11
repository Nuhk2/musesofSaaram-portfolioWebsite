const ImageGallery = () => {
  const images = [
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen gap-4 px-4 sm:gap-6 md:gap-8 lg:gap-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Gallery item"
          className="
            rounded-lg 
            transition-transform 
            duration-500 
            hover:scale-105 
            shadow-lg
            w-full sm:w-[45%] md:w-[40%] lg:w-[50%] 
            max-w-[500px] 
            h-auto
          "
        />
      ))}
    </div>
  );
};

export default ImageGallery;
