import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Product_update_Async, get_data_Async } from '../../services/action/productAction';
import { useNavigate } from 'react-router';

function Edit_product() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {product} = useSelector(state => state);
    console.log("pro",product);

    const [inputvalue, setInputvalue] = useState(product);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // let image = e.target.files[0];

        // console.log("im",image);

        setInputvalue({...inputvalue, [name]: value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(Product_update_Async(inputvalue.id, inputvalue));        
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
                            <Button type='submit'>Update Product</Button>
                        </Form.Group>

                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Edit_product;