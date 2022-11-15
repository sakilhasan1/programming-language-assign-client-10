import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const CourseDetails = ({ course }) => {
    const { name, photo, details } = course;

    return (
        <div className='mt-5'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={photo} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {details}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>

        </div>
    );
};

export default CourseDetails;