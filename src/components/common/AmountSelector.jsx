import MinusSvgIcon from "/src/components/common/svg/MinusSvgIcon";
import PlusSvgIcon from "/src/components/common/svg/PlusSvgIcon";

const AmountSelector = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-[10px] bg-very-slight-gray px-4 ${className}`}
    >
      <MinusSvgIcon />
      <span className="text-[1rem] font-bold text-black">0</span>
      <PlusSvgIcon />
    </div>
  );
};

export default AmountSelector;
