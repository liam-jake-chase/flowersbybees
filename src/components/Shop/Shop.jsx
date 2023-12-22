import React, { useEffect } from "react";
import "./Shop.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { productList } from "../../productData";

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
          {productList.map((item) => {
            return (
              <Card
                className="shop__card"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button
                    className="shop__card-button color-purple"
                    variant="primary"
                  >
                    Select
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <div className="shop__cards-two" data-aos="fade-up">
          {productList.map((item) => {
            return (
              <Card
                className="shop__card"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button
                    className="shop__card-button color-purple"
                    variant="primary"
                  >
                    Select
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </main>
    </body>
  );
}
