import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Scroll.css';

const cardsData = [
  { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Card 2', description: 'Description for card 2', imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Card 3', description: 'Description for card 3', imageUrl: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Card 4', description: 'Description for card 4', imageUrl: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Card 5', description: 'Description for card 5', imageUrl: 'https://via.placeholder.com/300' },
  { id: 6, title: 'Card 6', description: 'Description for card 6', imageUrl: 'https://via.placeholder.com/300' },
  { id: 7, title: 'Card 7', description: 'Description for card 7', imageUrl: 'https://via.placeholder.com/300' },
  { id: 8, title: 'Card 8', description: 'Description for card 8', imageUrl: 'https://via.placeholder.com/300' },
  { id: 9, title: 'Card 9', description: 'Description for card 9', imageUrl: 'https://via.placeholder.com/300' },
  { id: 10, title: 'Card 10', description: 'Description for card 10', imageUrl: 'https://via.placeholder.com/300' },
  { id: 11, title: 'Card 11', description: 'Description for card 11', imageUrl: 'https://via.placeholder.com/300' },
  { id: 12, title: 'Card 12', description: 'Description for card 12', imageUrl: 'https://via.placeholder.com/300' },
];

const Scroll = () => {
  const cardContainerRef = useRef(null);

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  return (
    <Container>
      <p>This is a responsive paragraph explaining the cards below.</p>
      <div className="scroll-container">
        <Button className="scroll-button" onClick={scrollLeft}>Left</Button>
        <div className="card-grid" ref={cardContainerRef}>
          {cardsData.map(card => (
            <Card key={card.id} className="bg-dark text-white m-2" style={{ width: '200px' }}>
              <Card.Img src={card.imageUrl} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          ))}
        </div>
        <Button className="scroll-button" onClick={scrollRight}>Right</Button>
      </div>
    </Container>
  );
};

export default Scroll;
