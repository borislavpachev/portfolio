import PropTypes from 'prop-types';

export default function Button({
  children,
  onClick,
  className='',
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={`${className} text-lg px-8 py-2 rounded bg-white/20 border border-blue-950 text-blue-950
        hover:bg-blue-950 hover:text-white transition duration-200 ease-in`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};
