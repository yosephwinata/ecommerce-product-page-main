import MinusSvgIcon from "/src/components/common/svg/MinusSvgIcon";
import PlusSvgIcon from "/src/components/common/svg/PlusSvgIcon";

const AmountSelector = ({ className, quantity, onMinusClick, onPlusClick }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-[10px] bg-very-slight-gray px-4 ${className}`}
    >
      <MinusSvgIcon onClick={onMinusClick} />
      <span className="text-[1rem] font-bold text-black">{quantity}</span>
      <PlusSvgIcon onClick={onPlusClick} />
    </div>
  );
};

export default AmountSelector;
