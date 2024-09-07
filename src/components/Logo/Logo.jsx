import PropTypes from 'prop-types';

export default function Logo({ logoRef, scrollIntoView }) {
  return (
    <div
      onClick={() => scrollIntoView()}
      ref={logoRef}
      className="hidden md:flex  w-full md:w-1/5 cursor-pointer -mt-3 text-6xl font-cursive items-center justify-center tracking-wider"
    >
      <div>B</div>
      <div className="-ml-1 translate-y-3">P</div>
    </div>
  );
}

Logo.propTypes = {
  logoRef: PropTypes.any,
  scrollIntoView: PropTypes.func,
};
