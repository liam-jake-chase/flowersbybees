import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/Home.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../productData";
import { productList } from "../../productData";

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
          {productList.map((item) => {
            return (
              <Card
                className="home__card"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button
                    className="home__card-button color-purple"
                    variant="primary"
                  >
                    Select
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Link data-aos="fade-up" to="/Shop" className="home__button">
          Click Here For More!
        </Link>
      </main>
    </body>
  );
}
