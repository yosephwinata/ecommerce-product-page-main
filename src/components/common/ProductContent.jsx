import WhiteCartSvgIcon from "./svg/WhiteCartSvgIcon";
import PrimaryButton from "./buttons/PrimaryButton";
import AmountSelector from "./AmountSelector";

const ProductContent = () => {
  return (
    <div className="p-6">
      <p className="mb-[1.1875rem] text-xs font-bold uppercase tracking-[1.85px] text-orange">
        Sneaker Company
      </p>
      <h1 className="mb-[0.9375rem] text-[1.75rem] font-bold leading-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mb-6 text-[0.9375rem] leading-[1.667rem] text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-[1.6875rem] flex items-center">
        <p className="text-[1.75rem] font-bold">$125.00</p>
        <p className="ml-4 rounded-md bg-pale-orange px-2 py-1 text-[1rem] font-bold text-orange">
          50%
        </p>
        <p className="ml-auto text-[1rem] font-bold text-grayish-blue line-through">
          $250.00
        </p>
      </div>
      <AmountSelector className="mb-4" />
      <PrimaryButton className="h-14 w-full">
        <WhiteCartSvgIcon />
        <span>Add to cart</span>
      </PrimaryButton>
    </div>
  );
};

export default ProductContent;
