import React from "react";
import fluoride from "../../../images/fuoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    title: "Fluoride Treatment",
    img: fluoride,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
  },
  {
    title: "cavity filling",
    img: cavity,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
  },
  {
    title: "Teath whitening",
    img: whitening,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5 ">
      <div className="text-center">
        <h6 style={{ color: "#7FDFDC" }}>OUR SERVICES</h6>
        <h2 style={{ color: "#3E465A" }}>Services We Provide</h2>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
            {serviceData.map((service) => (
              <ServiceDetail service={service}></ServiceDetail>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
