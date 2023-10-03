import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Product_add_Async } from '../../services/action/productAction';
import { useNavigate } from 'react-router';

function Add_product() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputvalue, setInputvalue] = useState({
        images: '',
        p_name: '',
        price: '',
        qty: '',
        des: ''

    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // let image = e.target.files[0];

        // console.log("im",image);

        setInputvalue({...inputvalue, [name]: value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Product_add_Async(inputvalue));        
        navigate('/view');

    }

    return (
        <>
            <Container>
                <Row>
                    <Form className='mt-3' onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Product Image</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Product Img" name='images' value={inputvalue.images} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Product Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Product Name" name='p_name' value={inputvalue.p_name} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Product Price</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Enter Price" name='price' value={inputvalue.price} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Product Qty</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Enter Qty" name='qty' value={inputvalue.qty} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Product Description</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Description" name='des' value={inputvalue.des} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Button type='submit'>Add Product</Button>
                        </Form.Group>

                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Add_product;