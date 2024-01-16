const ImageGalleryDesktop = ({ images }) => {
  return (
    <div className="w-[27.8175rem]">
      <div>
        <img
          src="/src/assets/images/image-product-1.jpg"
          alt="Selected product image"
          className="mb-8 w-full rounded-[15px]"
        />
      </div>
      <div className="flex justify-between">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[5.5rem] cursor-pointer overflow-hidden rounded-[10px]"
          >
            <img
              src={`/src/assets/images/image-product-${index + 1}-thumbnail.jpg`}
              alt={`Product thumbnail ${index + 1}`}
              className="z-10 w-full"
            />
            <div className="absolute left-0 top-0 z-20 h-full w-full hover:bg-white hover:opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryDesktop;
