import React from "react";
import InfoCard from "./InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: " We are open 24/7",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit our location",
    description: " Uttara, Dhaka-1230",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "contact us now",
    description: " 01962796374",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center ">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
