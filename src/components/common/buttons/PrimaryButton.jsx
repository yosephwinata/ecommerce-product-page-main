const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 rounded-[10px] bg-orange text-[1rem] font-bold text-white shadow-lg shadow-orange-shadow hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
