import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneHeart } from 'react-icons/ai';
import { TiWorld } from "react-icons/ti";

import './Addcard.css'; // Import the CSS file

const AddCard = () => {
  const [acard, setAcard] = useState([]);
  const [cart, setCart] = useState([]);

  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/list");
        setAcard(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const selectTours = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffleTours = selectTours(acard).filter(product => product.tourcategory === "Rating");
  const displayTours = shuffleTours.slice(0, 4);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const removeCart = (product) => {
    setCart(cart.filter(item => item._id !== product._id));
  };

  return (
    <Container>
      <h1 className='text-center mb-4'>Top Tours</h1>
      <Row>
        {displayTours.map(acd => (
          <Col xs={12} sm={6} md={4} lg={3} key={acd._id} className="mb-4">
            <Card className="bg-white text-black card-custom">
              <div className="position-relative">
                <Card.Img className="card-img" src={`http://localhost:5000/Assests/${acd.tourimage}`} alt="Card image" />
                <div className="position-absolute top-0 end-0 p-2">
                  <Button 
                    variant={cart.some(item => item._id === acd._id) ? 'danger' : 'green'}
                    onClick={() => cart.some(item => item._id === acd._id) ? removeCart(acd) : addCart(acd)}
                    className="heart-button"
                  >
                    <AiTwotoneHeart />
                  </Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="card-title">{acd.tourname}</Card.Title>
                <Card.Subtitle className='d-flex mb-2' style={{ gap: '10px' }}>
                  <span>From <del className="card-amount">₹{acd.touramount}</del></span><span className="card-amount">₹{acd.tourdiscount}</span>
                </Card.Subtitle>
                <Card.Subtitle><TiWorld />{acd.tourcountry}</Card.Subtitle>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AddCard;
