import Carousel from 'react-bootstrap/Carousel';
import img1 from '../public/carousel/img1.jpg';
import img2 from '../public/carousel/img2.jpg';
import img3 from '../public/carousel/img3.jpg';

function CarouselSlide() {
    return (
        <Carousel fade className=''>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover "
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Responsive caption</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover "
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide</h3>
                    <p>Responsive caption</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>Responsive caption</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlide;