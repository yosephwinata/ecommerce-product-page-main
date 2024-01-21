// Import all images statically
import productImage1 from "/src/assets/images/image-product-1.jpg";
import productImage2 from "/src/assets/images/image-product-2.jpg";
import productImage3 from "/src/assets/images/image-product-3.jpg";
import productImage4 from "/src/assets/images/image-product-4.jpg";
import productThumbnail1 from "/src/assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "/src/assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "/src/assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "/src/assets/images/image-product-4-thumbnail.jpg";

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];
const productThumbnails = [
  productThumbnail1,
  productThumbnail2,
  productThumbnail3,
  productThumbnail4,
];

export const getProductImageByIndex = (index) => {
  // Check if the index is within the bounds of the images array
  if (index < 0 || index >= productImages.length) {
    console.error("Image index out of bounds:", index);
    return null; // Alternative: Replace this with a default image if you have one
  }

  return productImages[index];
};

export const getProductThumbnailByIndex = (index) => {
  // Check if the index is within the bounds of the images array
  if (index < 0 || index >= productThumbnails.length) {
    console.error("Thumbnail index out of bounds:", index);
    return null; // Alternative: Replace this with a default image if you have one
  }

  return productThumbnails[index];
};
