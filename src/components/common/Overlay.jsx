const Overlay = ({ isOpen, onOverlayClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className="bg-perfect-black fixed left-0 top-0 z-40 h-full w-full opacity-80"
      onClick={onOverlayClick}
    ></div>
  );
};

export default Overlay;
