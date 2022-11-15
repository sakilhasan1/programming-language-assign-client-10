import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Java = () => {
    const java = {
        "id": 1011,
        "name": "JAVA",
        "photo": "https://contentstatic.techgig.com/photo/90078629.cms",
        "details": "Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc."
    }
    return (
        <div>
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={java.photo} />
                    <Card.Body>
                        <Card.Title>{java.name}</Card.Title>
                        <Card.Text>
                            {java.details}
                        </Card.Text>
                        <Button variant="primary">Get premium Access</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Java;