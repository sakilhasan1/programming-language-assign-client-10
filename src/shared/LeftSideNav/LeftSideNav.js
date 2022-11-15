import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    return (
        <div className='bg-success'>
            <ListGroup >
                <Link to='/cd'>  <ListGroup.Item variant="danger">C</ListGroup.Item></Link>
                <Link to='/javaScript'>  <ListGroup.Item variant="success">JAVASCRIPT</ListGroup.Item></Link>
                <Link to='/python'>  <ListGroup.Item variant="danger">PYTHON</ListGroup.Item></Link>
                <Link to='/java'>  <ListGroup.Item variant="success">JAVA</ListGroup.Item></Link>
                <Link to='/ccc'>  <ListGroup.Item variant="danger">C++</ListGroup.Item></Link>
                <Link to='/php'>  <ListGroup.Item variant="success">PHP</ListGroup.Item></Link>
            </ListGroup>
        </div>

    );
};

export default LeftSideNav;