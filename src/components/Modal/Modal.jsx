import PropTypes from 'prop-types';

function Modal({ open, close, children }) {
  return (
    <div
      onClick={close}
      className={`fixed inset-0 flex justify-center items-center z-50 
    transition-colors ${open ? 'visible bg-black/55' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[75%] h-[75%] md:max-w-2xl rounded-3xl flex
           bg-blue-500 text-white text-xl overflow-auto
        items-center justify-center"
      >
        <button onClick={close} className="absolute top-0 right-0 m-3 text-2xl">
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.any,
};
export default Modal;
