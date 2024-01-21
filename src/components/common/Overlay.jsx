const Overlay = ({ isOpen, onOverlayClick, isTransparent }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 top-0 z-30 h-full w-full bg-perfect-black opacity-80 ${isTransparent && "bg-transparent"}`}
      onClick={onOverlayClick}
    ></div>
  );
};

export default Overlay;
