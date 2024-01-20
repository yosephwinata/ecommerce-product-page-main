import useWindowSize from "../hooks/useWindowSize";
import ImageCarouselMobile from "../components/touch/ImageCarouselMobile";
import ImageGalleryDesktop from "../components/desktop/ImageGalleryDesktop";
import ProductContent from "../components/common/ProductContent";

const Product = () => {
  const product = {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    originalPrice: 250,
    discountPercentage: 50,
    images: [
      "/src/assets/images/image-product-1.jpg",
      "/src/assets/images/image-product-2.jpg",
      "/src/assets/images/image-product-3.jpg",
      "/src/assets/images/image-product-4.jpg",
    ],
  };

  const calculateFinalPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const finalPrice = calculateFinalPrice(
    product.originalPrice,
    product.discountPercentage,
  );

  const { isDesktop } = useWindowSize();

  return (
    <div className="xl:mx-auto xl:mt-[5.625rem] xl:flex xl:w-[63.4375rem] xl:justify-between">
      {isDesktop ? (
        <ImageGalleryDesktop images={product.images} />
      ) : (
        <ImageCarouselMobile images={product.images} />
      )}
      <ProductContent product={{ ...product, finalPrice }} />
    </div>
  );
};

export default Product;
