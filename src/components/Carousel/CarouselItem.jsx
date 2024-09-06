import PropTypes from 'prop-types';

export default function CarouselItem({ id, children }) {
  return (
    <div
      id={id}
      className="carousel-item max-h-[330px] w-full overflow-auto"
    >
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node,
};
