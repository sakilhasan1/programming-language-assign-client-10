import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CoursePython = () => {
    const python = {
        "id": 789,
        "name": "PYTHON",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkDZQ7dSj1TMvDJ0yUQ4Q6fnl9-x0wq65rA&usqp=CAU",
        "details": "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. "
    }
    return (
        <div>
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={python.photo} />
                    <Card.Body>
                        <Card.Title>{python.name}</Card.Title>
                        <Card.Text>
                            {python.details}
                        </Card.Text>
                        <Button variant="primary">Get premium Access</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CoursePython;