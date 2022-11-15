import React from 'react';
import { Button, Card } from 'react-bootstrap';

const JavaScript = () => {

    const JavaScript = {
        "id": 456,
        "name": "JAVASCRIPT",
        "photo": "https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg",
        "details": "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc"
    }
    return (
        <div>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={JavaScript.photo} />
                <Card.Body>
                    <Card.Title>{JavaScript.name}</Card.Title>
                    <Card.Text>
                        {JavaScript.details}
                    </Card.Text>
                    <Button variant="primary">Get premium Access</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default JavaScript;