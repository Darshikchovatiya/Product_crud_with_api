import React, { useEffect } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Product_delete_Async, Product_edit_Async, get_data_Async } from '../../services/action/productAction';
import { useNavigate } from 'react-router';

function View_product() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector(state => state);

    const all_data = () => {
        dispatch(get_data_Async());
    }

    const handleDelete = async (id) => {
        await dispatch(Product_delete_Async(id));
    }

    const handleEdit = async (id) => {
        await dispatch(Product_edit_Async(id));
        navigate(`/edit/:${id}`);
    }


    useEffect(() => {
        all_data()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {
                        products.map((d) => {
                            // console.log(d);
                            return (
                                <Card style={{ width: '18rem', marginTop: 20, marginRight: 20, padding: "0" }}>
                                    <div style={{width: "260px", height: "260px", margin: "0 auto"}}>
                                        <Card.Img variant="top" src={d.images} alt='img' style={{width: "100%", height: "100%", objectFit: "cover"}} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='mb-3'>{d.p_name}</Card.Title>
                                        <Card.Subtitle className='mb-2'>Price : {d.price}</Card.Subtitle>
                                        <Card.Text className='mb-2'>Qty : {d.qty}</Card.Text>
                                        <Card.Text className='mb-3'>{d.des}</Card.Text>
                                        <Card.Link>
                                            <Button className='btn-danger' onClick={() => handleDelete(d.id)}>Delete</Button>
                                        </Card.Link>
                                        <Card.Link>
                                            <Button onClick={() => handleEdit(d.id)}>Edit</Button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }


                </Row>
            </Container>
        </>
    )
}

export default View_product;