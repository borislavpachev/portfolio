import PropTypes from 'prop-types';

export default function Logo({ logoRef, scrollIntoView }) {
  return (
    <div
      onClick={() => scrollIntoView()}
      ref={logoRef}
      className="cursor-pointer pb-4 text-6xl font-cursive flex items-center justify-center w-full md:w-1/5 tracking-wider"
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
