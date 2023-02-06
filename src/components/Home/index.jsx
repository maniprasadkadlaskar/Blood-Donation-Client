import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";

const Home = () => {
    return (
        <Carousel variant="light" className="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>A single drop of blood can make a huge difference</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Be the reason for someone’s heartbeat</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Stay fit and eat right and donate blood</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Home;