import React from "react";

function car() {
  const desielEngine = " v12 diesel engine";
  const car = "BMW";
  const carModel = "X5";
  const carColor = "black";
  const carYear = 2022;
  const carPrice = 50000;
  const carDescription = `The ${car} ${carModel} is a ${carColor} ${carYear} model with a ${carPrice} price tag and a powerful${desielEngine}.`;
  const carImage = "https://example.com/bmw-x5.jpg";
  const carFeatures = [
    "Luxury interior",
    "Advanced safety features",
    "All-wheel drive",
    "High-performance engine",
  ];
  const carReviews = [
    {
      reviewer: "John Doe",
      rating: 5,
      comment: "Amazing car! Highly recommend.",
    },
    {
      reviewer: "Jane Smith",
      rating: 4,
      comment: "Great performance but a bit pricey.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "10px" }}>
        {car} {carModel}
      </h1>
      <img
        src={carImage}
        alt={`${car} ${carModel}`}
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
        {carDescription}
      </p>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Features
      </h2>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "20px",
          marginBottom: "20px",
        }}
      >
        {carFeatures.map((feature, index) => (
          <li key={index} style={{ marginBottom: "5px", color: "#444" }}>
            {feature}
          </li>
        ))}
      </ul>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Reviews
      </h2>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
          marginBottom: "20px",
        }}
      >
        {carReviews.map((review, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong style={{ color: "#333" }}>{review.reviewer}</strong> (
            <span style={{ color: "#f39c12" }}>{review.rating} stars</span>):{" "}
            <span style={{ color: "#555" }}>{review.comment}</span>
          </li>
        ))}
      </ul>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Price
      </h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>${carPrice}</p>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Year
      </h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>{carYear}</p>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Color
      </h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>{carColor}</p>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Engine
      </h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>{desielEngine}</p>
      <h2 style={{ color: "#222", fontSize: "1.5rem", marginBottom: "10px" }}>
        Model
      </h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>{carModel}</p>
    </div>
  );
}

export default car;
