import PropTypes from 'prop-types';

export default function Section({ scrollRef, className, children }) {
  return (
    <section
      ref={scrollRef}
      className={`${className} m-16 flex flex-col items-center`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  scrollRef: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.node,
};
