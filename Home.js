import React from 'react'
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className="hero">
            <Card className="bg-dark text-white border-0">
                <Card.Img src="assests/bg.jpg" class="card-img"alt="Background" height="550px" />
                <Card.ImgOverlay>
                    <div className="container">

                    </div>
                    <Card.Title><h1><b >New Season Arrives</b></h1></Card.Title>
                    <Card.Text>
                        <h3>Check Out All Trends..,</h3>
                    </Card.Text>
                    
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Home