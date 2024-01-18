import useWindowSize from "../hooks/useWindowSize";
import ImageCarouselMobile from "../components/touch/ImageCarouselMobile";
import ImageGalleryDesktop from "../components/desktop/ImageGalleryDesktop";
import ProductContent from "../components/common/ProductContent";

const Product = () => {
  const productImages = [
    "/src/assets/images/image-product-1.jpg",
    "/src/assets/images/image-product-2.jpg",
    "/src/assets/images/image-product-3.jpg",
    "/src/assets/images/image-product-4.jpg",
  ];
  const { isDesktop } = useWindowSize();

  return (
    <div className="xl:mx-auto xl:mt-[5.625rem] xl:flex xl:w-[63.4375rem] xl:justify-between">
      {isDesktop ? (
        <ImageGalleryDesktop images={productImages} />
      ) : (
        <ImageCarouselMobile images={productImages} />
      )}
      <ProductContent />
    </div>
  );
};

export default Product;
