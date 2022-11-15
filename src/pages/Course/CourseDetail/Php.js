import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Php = () => {
    const php = {
        "id": 1415,
        "name": "PHP",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ab5u74plyU9K9vw6D4GHt_Qo_pHPk6Luhvzjlh_p8TgEb0V7BDlC0fac6zLSQbxmUkw&usqp=CAU",
        "details": "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages.PHP scripts can only be interpreted on a server that has PHP installed.The client computers accessing the PHP scripts require a web browser only. A PHP file contains PHP tags and ends with the extension “.php”."
    }
    return (
        <div>
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={php.photo} />
                    <Card.Body>
                        <Card.Title>{php.name}</Card.Title>
                        <Card.Text>
                            {php.details}
                        </Card.Text>
                        <Button variant="primary">Get premium Access</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Php;