import React, {useState} from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import ImageOverlay from "components/CustomComponents/ImageOverlay"
import SectionCarousel from 'views/index-sections/SectionCarousel.js'
import { fetchProducts } from "service/service"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container
} from 'reactstrap';

const override = css`
    position: absolute;
    left: 45%;
    top: 40%;
`;

function Index(props) {
    document.documentElement.classList.remove("nav-open");
    const { fetchProducts } = props;

    React.useEffect(() => {
        document.body.classList.add("index");
        fetchProducts();
        console.log(props.products.length)
        return function cleanup() {
            document.body.classList.remove("index");
        };
    }, [fetchProducts, props.products.length]);

    if (props.isPending) {
        return (
            <>
                <div className="sweet-loading">
                    <ClipLoader
                        css={override}
                        size={150}
                    />
                </div>
            </>
        )
    } else {
        return (
            <>
                <IndexNavbar />
                <IndexHeader />
                <div className="main">
                    <input type="hidden" name="csrftoken" value="{% csrf_token %}" />
                    <Container>
                        <div className="title">
                            <h2>Best Sellers</h2>
                        </div>
                    </Container>
                    <Container>
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
                    </Container>
                    <Container>
                        <div className="title">
                            <h2>New collection</h2>
                        </div>
                    </Container>
                    <Container>
                        <CardDeck className='card-desk-margin'>
                            <ImageOverlay url='' src='https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362' />
                            <ImageOverlay url='' src='https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362' />
                        </CardDeck>
                    </Container>
                    <Container>
                        <div className="title">
                            <h2>Feature</h2>
                        </div>
                    </Container>
                    <SectionCarousel />
                    <Footer />
                </div>
            </>
        );
    }
}

// export default Index;
const mapStateToProps = state => ({
    products: state.products.products,
    isPending: state.products.pending
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
