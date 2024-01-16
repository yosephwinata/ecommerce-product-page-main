import useWindowSize from "../hooks/useWindowSize";
import ImageCarouselMobile from "../components/touch/ImageCarouselMobile";
import ImageGalleryDesktop from "../components/desktop/ImageCarouselDesktop";

const Product = () => {
  const productImages = [
    "/src/assets/images/image-product-1.jpg",
    "/src/assets/images/image-product-2.jpg",
    "/src/assets/images/image-product-3.jpg",
    "/src/assets/images/image-product-4.jpg",
  ];
  const { isDesktop } = useWindowSize();

  return <ImageCarouselMobile images={productImages} />;
};

export default Product;
