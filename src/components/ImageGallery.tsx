const ImageGallery = () => {
  const images = [
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
    "https://www.rogerlowe.co.uk/wp-content/uploads/2024/09/Birds-copy-1024x768.jpg",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Centered"
          className="w-1/2 max-w-[500px] h-auto rounded-lg px-2"
        />
      ))}
    </div>
  );
};

export default ImageGallery;