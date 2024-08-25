import React, { useState } from "react";

const Mapping2 = () => {
  const [products, setProducts] = useState([
    {      //1//
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/kn0n6a80/t-shirt/h/n/0/l-plain-t-shirt-the-shopping-field-original-imagfrr8hpdrggzg.jpeg?q=90&crop=false",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.U6IGVZrAqSpzBauUbQXbCAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
      "https://up.yimg.com/ib/th?id=OIP.h5LXJLoCSPsEkPGXiiLcTgHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109",
    },
    {  //2//
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.E6jubV66SCtZM1BkCZgaiwHaJ4&pid=Api&P=0&h=180",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.dOpv9CQ_8VIJdfAm1fmsmQHaJ8&pid=Api&P=0&h=180",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "26",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.GKbDVS0grWumDU4BUANodAHaJ3&pid=Api&P=0&h=180",
    },
    { //3//
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.WjqaDuqEhNX6aR4tHW7EegAAAA&pid=Api&P=0&h=180",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.YSgNolo4vuupVT9co2khngHaJ4&pid=Api&P=0&h=180",
    },
    {  
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.7MB98B8wew2ut_XqlFtpOgHaJ4&pid=Api&P=0&h=180",
    },
    { //4//
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Ygns9mSU03AO2Lx8h93dnQAAAA&pid=Api&P=0&h=180",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.l7dfSQl8FAaVSc5XWnT40gHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.c2v10iFtZevVbmtqlVgx5QHaGE&pid=Api&P=0&h=180",
    },
    { //5//
      name: "Tshirt",
      price: 1000,
      size: "M",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.m_qgTBvLymbAO-QO6AMzAAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Shirt",
      price: 4000,
      size: "L",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.3oVWwO81H7uwlgVzXueGwwHaIo&pid=Api&P=0&h=180",
    },
    {
      name: "Jeans",
      price: 5000,
      size: "34",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.2oWsDw8XnT0aJ5qo_QAZ5gHaGt&pid=Api&P=0&h=180",
    },
    
    
  ]);
  return (
    <div>
      <h1>Products</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {products.map((itemDetails) => (
          <div
            style={{
              width: "18%",
              height: "450px",
              border: "2px solid black",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "100%", height: "60%" }}
              src={itemDetails.image}
            />
            <h2>Name {itemDetails.name}</h2>
            <h3>Price {itemDetails.price}</h3>
            <h3>Size {itemDetails.size}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapping2;