import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [Loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted =true;
            }
        }
        getProducts();
    }, []);
const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    setFilter(updatedList);
}
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-S pb-S">
                <button className="btn btn-outline-dark me-2"onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2"onClick={()=>filterProduct("electronics")}>Electronics</button>

                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.image}alt={product.title}height="250px" />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                           ${product.price}
                                        </Card.Text>
                                        <Button variant="btn btn-outline-dark">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                                

                            </div>
                        </>
                    )
                })}
            </>
        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {<ShowProducts/>}
                </div>
            </div>
        </div>
    )
}
export default Products;
