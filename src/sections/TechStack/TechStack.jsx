import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedCard,
  CarouselButton,
  CarouselItem,
  Carousel,
  Section,
  SectionTitle,
} from '../../components';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { techStackData } from '../../utils/constants';

export default function TechStack({ techStackRef }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <Section scrollRef={techStackRef} className={`text-xl`}>
      <SectionTitle>Tech Stack & Experience</SectionTitle>
      <div
        className="flex flex-col md:flex-row w-full md:max-w-5xl bg-white/10 
       rounded-3xl p-0 md:p-10 gap-6"
      >
        <div className="w-full md:w-1/2 rounded-3xl md:pt-5 border-b-8 md:border-r-8 border-blue-950">
          <p className="font-bold mb-10 mt-5 md:mt-0 md:mb-2 items-center leading-relaxed">
            <span className="bg-blue-950 rounded-3xl text-2xl px-4 py-2 mx-2">
              <FontAwesomeIcon icon={faCode} />
            </span>
            Tech Stack
          </p>
          <p className="italic mb-6 mx-3 md:mb-3">
            I love seeing code come to life before my eyes.
          </p>
          <div
            id="tech-stack"
            className="max-h-[330px] grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))]
          place-items-center rounded-3xl p-1 gap-x-2 gap-y-2 overflow-auto"
          >
            {techStackData.map((technology) => {
              return (
                <AnimatedCard
                  className="w-full md:w-[135px] flex flex-col p-2 items-center text-center justify-center rounded-3xl bg-white shadow-2xl shadow-blue-950"
                  key={technology.id}
                  title={technology.name}
                >
                  <img
                    style={{
                      filter: `${technology.color}`,
                    }}
                    className="w-[100px] h-[auto] p-2 shadow-2xl shadow-blue-950 rounded-3xl"
                    src={technology.logo}
                    alt={technology.name}
                  />
                  <p className="w-full mt-1 overflow-hidden text-ellipsis text-nowrap text-blue-950">
                    {technology.name}
                  </p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2 rounded-3xl md:pt-5 p-1 border-t-8 md:border-l-8 border-blue-950">
          <p className="font-bold mt-3 md:mt-0 mb-9 items-center leading-relaxed">
            <span className="bg-blue-950 rounded-3xl text-2xl px-4 py-2 mr-2">
              <FontAwesomeIcon icon={faCode} />
            </span>
            Frontend Experience
          </p>

          <Carousel>
            <div id="carousel-element" className="carousel w-full">
              {carouselItems.map((item, index) => {
                return (
                  <CarouselItem key={index} id={`carousel-item${index + 1}`}>
                    {item}
                  </CarouselItem>
                );
              })}
            </div>
            <div className="flex w-full justify-center gap-1">
              {carouselItems.map((_, index) => {
                return (
                  <CarouselButton
                    key={index}
                    id={index}
                    active={activeButtonIndex}
                    setActive={() => handleButtonClick(index)}
                  />
                );
              })}
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
}

const carouselItems = [
  <>
    <div className="p-2">
      <div className="leading-relaxed mb-4 font-bold">
        <p>Telerik Academy - Alpha JavaScript Track</p>
        <p className="font-normal">
          <span className="font-bold">Period: </span>10/2023 - 03/2024{' '}
        </p>
        <p>
          <a
            className="underline items-center font-bold"
            href="https://drive.google.com/file/d/1LR0ijOwdCn_pUlDehIPjKfwXTpoVoQFY/view"
            target="_blank"
            rel="Certificate"
          >
            Certificate
          </a>
        </p>
      </div>

      <p className="mb-2">Acquired a solid foundation in the following:</p>
      <ul>
        <li className="list-disc ml-6">JavaScript Core </li>
        <li className="list-disc ml-6">Object Oriented Programming</li>
        <li className="list-disc ml-6">SOLID Principles</li>
        <li className="list-disc ml-6">Data Structures and Algorithms</li>
        <li className="list-disc ml-6">JavaScript Web with React</li>
        <li className="list-disc ml-6">Unit Testing</li>
        <li className="list-disc ml-6">Version Control (Git)</li>
      </ul>
    </div>
  </>,

  <>
    <div className="p-2">
      <div className="leading-relaxed mb-4 font-bold">
        <p>Self - education (Udemy Courses and Personal Projects)</p>
        <p className="font-normal">
          <span className="font-bold">Period: </span>03/2024 - Present{' '}
        </p>
      </div>
      <p className="mb-2">
        Completed Udemy courses with the following technologies:
      </p>
      <ul>
        <li className="list-disc ml-6">TypeScript</li>
        <li className="list-disc ml-6">Node.js + Express</li>
        <li className="list-disc ml-6">Sass</li>
        <li className="list-disc ml-6">Tailwind CSS</li>
        <li className="list-disc ml-6">React Testing Library</li>
      </ul>
    </div>
  </>,
];

TechStack.propTypes = {
  techStackRef: PropTypes.any,
};
