import PropTypes from 'prop-types';

export default function CarouselItem({ id, children }) {
  return (
    <div id={id} className="carousel-item w-full">
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node,
};
