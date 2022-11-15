import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const C = () => {
    const cd = {
        "id": 123,
        "name": "C",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6SFiPPAqRNfdcL0UcPgXBA0yYSknhdfwoQ&usqp=CAU",
        "details": "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs."
    }

    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cd.photo} />
                <Card.Body>
                    <Card.Title>{cd.name}</Card.Title>
                    <Card.Text>
                        {cd.details}
                    </Card.Text>
                    <Button variant="primary">Get premium Access</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default C;