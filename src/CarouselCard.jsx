import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../public/carouselcard/img1.jpg';
import img2 from '../public/carouselcard/img2.jpg';
import img3 from '../public/carouselcard/img3.jpg';
import img4 from '../public/carouselcard/img4.jpg';
import img5 from '../public/carouselcard/img5.jpg';

const cards = [
    { img: img1, title: 'Card One', text: 'This is Card One!' },
    { img: img2, title: 'Card Two', text: 'This is Card Two!' },
    { img: img3, title: 'Card Three', text: 'This is Card Three!' },
    { img: img4, title: 'Card Four', text: 'This is Card Four!' },
    { img: img5, title: 'Card Five', text: 'This is Card Five!' }
];

function CarouselCard() {
  return (
    <div className="p-3 p-md-4 p-lg-5">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card className="border border-0 h-full ">
              <Card.Img
                src={card.img}
                className="h-[50vh] object-cover"
              />
              <Card.Body>
                <Card.Title className='flex mx-auto justify-content-center items-center font-semibold'>{card.title}</Card.Title>
                <Card.Text className='flex text-gray-400 justify-content-center items-center'>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselCard;
