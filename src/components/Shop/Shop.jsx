import React, { useEffect } from "react";
import "./Shop.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import flower1 from "../../assets/rose-165819_640.jpg";
import flower2 from "../../assets/pexels-pixabay-56866.jpg";
import flower3 from "../../assets/purple-osteospermum-daisy-flower_1373-16.avif";

export default function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <body>
      <main className="shop">
        <h1 className="shop__header" data-aos="fade-down">
          SHOP
        </h1>
        <hr className="shop__underline" />
        <div className="shop__cards" data-aos="fade-up">
          <Card className="shop__card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={flower1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="shop__card-button color-purple"
                variant="primary"
              >
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
              <Button className="shop__card-button" variant="primary">
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
              <Button className="shop__card-button" variant="primary">
                Select
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="shop__cards-two" data-aos="fade-up">
        <Card className="shop__card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={flower1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="shop__card-button color-purple"
                variant="primary"
              >
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
              <Button className="shop__card-button" variant="primary">
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
              <Button className="shop__card-button" variant="primary">
                Select
              </Button>
            </Card.Body>
          </Card>
        </div>
      </main>
    </body>
  );
}
