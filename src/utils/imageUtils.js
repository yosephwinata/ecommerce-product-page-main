// Import all images statically
import image1 from "/src/assets/images/image-product-1.jpg";
import image2 from "/src/assets/images/image-product-2.jpg";
import image3 from "/src/assets/images/image-product-3.jpg";
import image4 from "/src/assets/images/image-product-4.jpg";

const images = [image1, image2, image3, image4];

export const getProductImageByIndex = (index) => {
  // Check if the index is within the bounds of the images array
  if (index < 0 || index >= images.length) {
    console.error("Image index out of bounds:", index);
    return null; // Alternative: Replace this with a default image if you have one
  }

  return images[index];
};
