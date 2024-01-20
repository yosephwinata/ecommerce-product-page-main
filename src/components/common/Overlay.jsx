const Overlay = ({ isOpen, onOverlayClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 z-40 h-full w-full bg-perfect-black opacity-80"
      onClick={onOverlayClick}
    ></div>
  );
};

export default Overlay;
