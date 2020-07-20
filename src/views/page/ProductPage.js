import React, { useState } from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/Headers/PageHeader.js";
import Footer from "components/Footers/Footer.js";
import Slider from "nouislider";

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col, Label, Input,
    InputGroup, InputGroupAddon, InputGroupText

} from 'reactstrap';

function Product() {
    document.documentElement.classList.remove("nav-open");
    const [sliderValue, setSliderValue] = useState(['50.00', '500.00']);

    React.useEffect(() => {
        document.body.classList.add("product-page");
        if (
            !document.getElementById("sliderDoubleCustom").classList.contains("noUi-target")
          ) {
            var slider = Slider.create(document.getElementById("sliderDoubleCustom"), {
              start: [50, 500],
              connect: [false, true, false],
              step: 50,
              range: { min: 50, max: 500 },
            });
            slider.on('change', () => {
                setSliderValue(slider.get())
              })
          }
        return function cleanup() {
            document.body.classList.remove("product-page");
        };
    });
    return (
        <>
            <IndexNavbar />
            <PageHeader />
            <div className="main">
                <Container className='margin-top-50 '>
                    <Row>
                        <Col lg='2' md='2'>
                            <h4><b>Brand</b></h4>
                            <div className='margin-top-15'>
                            <div className="form-check-radio">
                                <Label check>
                                    <Input defaultValue="option1" id="nike" name="exampleRadios" type="radio"/> Nike <span className="form-check-sign" />
                                </Label>
                            </div>
                            <div className="form-check-radio">
                                <Label check>
                                <Input defaultValue="option1" id="adidas" name="exampleRadios" type="radio"/> Adidas <span className="form-check-sign" />
                                </Label>
                            </div>
                            <div className="form-check-radio">
                                <Label check>
                                    <Input defaultValue="option1" id="puma" name="exampleRadios" type="radio"/> Puma <span className="form-check-sign" />
                                </Label>
                            </div>
                            </div>
                            <h4><b>Price</b></h4>
                                <Col lg='11' md='11'>
                                <div className="slider 5" id="sliderDoubleCustom" />
                                </Col>
                                <p style={{textAlign: 'center'}}>{sliderValue[0]} - {sliderValue[1]}</p>
                        </Col>
                        <Col lg='10' md='10'>
                            <Row>
                                <Col lg='9' md='9'> </Col>
                                <Col lg='3' md='3'>
                                    <InputGroup className='margin-top-15'>
                                        <Input placeholder="Search" type="text" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                <i aria-hidden={true} className="fa fa-search" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <CardDeck className='card-desk-margin'>
                                <Card>
                                    <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                        <Button>View more</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>View more</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                                        <Button>View more</Button>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                            <CardDeck className='card-desk-margin'>
                            <Card>
                        <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>View more</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>View more</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={require('assets/img/image-shoes.jpeg')} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>View more</Button>
                        </CardBody>
                    </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    );
}

export default Product;
