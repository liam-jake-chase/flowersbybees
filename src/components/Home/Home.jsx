import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home/Home.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import flower1 from "../../assets/rose-165819_640.jpg";
import flower2 from "../../assets/pexels-pixabay-56866.jpg"
import flower3 from "../../assets/purple-osteospermum-daisy-flower_1373-16.avif"

export default function FlowersByBee() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <body>
      <main className="home">
        <h1 className="home__header text-center mb-2" data-aos="fade-down">
          WELCOME
        </h1>
        <hr className="home__underline" />
        <div className="home__cards" data-aos="fade-right">
          <Card className="home__card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={flower1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="home__card-button color-purple" variant="primary">
                Select
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={flower2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="home__card-button" variant="primary">
                Select
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={flower3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="home__card-button" variant="primary">
                Select
              </Button>
            </Card.Body>
          </Card>
        </div>
        <Link data-aos="fade-up" to="/Shop" className="home__button">
          Click Here For More!
        </Link>
      </main>
    </body>
  );
}