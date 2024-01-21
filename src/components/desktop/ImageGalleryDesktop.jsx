import { useState } from "react";
import { getProductImageByIndex } from "/src/utils/imageUtils";

const ImageGalleryDesktop = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="w-[27.8175rem]">
      <img
        // src={`/src/assets/images/image-product-${selectedImageIndex + 1}.jpg`}
        src={getProductImageByIndex(selectedImageIndex)}
        alt="Selected product image"
        className="mb-8 w-full cursor-pointer rounded-[15px]"
      />
      <div className="flex justify-between">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-[5.5rem] cursor-pointer overflow-hidden rounded-[10px] ${index === selectedImageIndex && "border-2 border-orange"}`}
          >
            <img
              src={`/src/assets/images/image-product-${index + 1}-thumbnail.jpg`}
              alt={`Product thumbnail ${index + 1}`}
              className="z-10 w-full"
            />
            <div
              className={`absolute left-0 top-0 z-20 h-full w-full hover:bg-white hover:opacity-50 ${index === selectedImageIndex && "bg-white opacity-50"}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryDesktop;
