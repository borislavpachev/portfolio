import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';
import CarouselButton from './CarouselButton';

export default function Carousel({ children }) {
  return (
    <>
      <div id="carousel-component" className="carousel w-full">
        {children.map((item, index) => {
          return (
            <CarouselItem key={index} id={`carousel-item${index + 1}`}>
              {item}
            </CarouselItem>
          );
        })}
      </div>
      <div id="carousel-buttons" className="flex w-full justify-center gap-2 mt-2">
        {children.map((item, index) => {
          return <CarouselButton key={index} id={index} />;
        })}
      </div>
    </>
  );
}

Carousel.propTypes = {
  children: PropTypes.array,
};
