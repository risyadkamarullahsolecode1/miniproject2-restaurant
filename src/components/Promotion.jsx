import React from 'react';
import { Container, Row, Card, CardImg, CardBody, CardTitle } from 'react-bootstrap';

const Promotion = () => {
  const promotions = [
    { id: 1, image: './img/promotion1.jpeg', title: 'Promo 1' },
    { id: 2, image: './img/promotion2.jpeg', title: 'Promo 2' },
    { id: 3, image: './img/promotion3.jpeg', title: 'Promo 3' }
  ];

  return (
    <div>
        <h2>Promotion</h2>
        <Container className="mb-3 pb-3">
            <Row>
                {promotions.map((promo) => (
                    <div key={promo.id} className="col-md-4">
                        <Card className="mb-4">
                            <Card.Img variant="top" src={promo.image} />
                            <CardBody>
                                <CardTitle>{promo.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Row>
        </Container>
    </div>
  );
};

export default Promotion;