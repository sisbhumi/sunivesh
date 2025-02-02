import { Carousel } from "react-bootstrap"
import "./Styles/Slider.css"
import "./Images/logo.jpg"

function Slider(){
    return(
    <div className="slider"> 
     <Carousel>
        <Carousel.Item interval={1000}>
            <img class="d-block w-50" src="image1.jpg" alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img class="d-block w-50" src="image2.jpg" alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img class="d-block w-50" src="image3.jpg" alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Slider;