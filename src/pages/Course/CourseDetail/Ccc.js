import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Ccc = () => {
    const Css = {
        "id": 1213,
        "name": "C++",
        "photo": "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
        "details": "C++ (pronounced C plus plus) is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM, so it is available on many platforms."
    }
    return (
        <div>
            <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Css.photo} />
                    <Card.Body>
                        <Card.Title>{Css.name}</Card.Title>
                        <Card.Text>
                            {Css.details}
                        </Card.Text>
                        <Button variant="primary">Get premium Access</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Ccc;