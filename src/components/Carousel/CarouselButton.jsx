import PropTypes from 'prop-types';

export default function CarouselButton({ id, active, setActive }) {
  const scrollCarousel = () => {
    const item = document.getElementById(`carousel-element`);

    let carouselWidth = item.clientWidth;
    let targetXPixel = carouselWidth * id;

    item.scrollTo(targetXPixel, 0);
    setActive();
  };

  return (
    <button
      onClick={scrollCarousel}
      className={`${
        active === id ? 'bg-blue-950' : 'bg-slate-500'
      } mt-1 rounded-3xl font-bold px-3 py-1`}
    >
      {id + 1}
    </button>
  );
}

CarouselButton.propTypes = {
  id: PropTypes.any,
  active: PropTypes.number,
  setActive: PropTypes.func,
};
