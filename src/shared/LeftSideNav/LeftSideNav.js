import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    return (
        <div className='bg-success'>
            <ListGroup >
                <Link to='/cd' >  <ListGroup.Item variant="danger"><h5>C</h5></ListGroup.Item></Link>
                <Link to='/javaScript'>  <ListGroup.Item variant="success"><h5>JAVASCRIPT</h5></ListGroup.Item></Link>
                <Link to='/python'>  <ListGroup.Item variant="danger"><h5>PYTHON</h5></ListGroup.Item></Link>
                <Link to='/java'>  <ListGroup.Item variant="success"><h5>JAVA</h5></ListGroup.Item></Link>
                <Link to='/ccc'>  <ListGroup.Item variant="danger"><h5>C++</h5></ListGroup.Item></Link>
                <Link to='/php'>  <ListGroup.Item variant="success"><h5>PHP</h5></ListGroup.Item></Link>
            </ListGroup>
        </div>

    );
};

export default LeftSideNav;