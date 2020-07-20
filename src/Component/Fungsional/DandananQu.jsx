import React, { useState } from 'react';
import { Button, Col, Card, CardTitle, Row, CardText, CardImg, Collapse, CardBody, NavLink, ListGroup, ListGroupItem, UncontrolledCarousel, Container } from 'reactstrap'
import './CSS/Blog.css';



function DandananQu(props) {
    return (
        <Row className="p">
            <span></span>
            <Col sm="2">
                <Card body>
                    <CardTitle className="cardDandannaQu">MAYBELLINE</CardTitle>
                    <CardImg src="images/logomaybelline.jpg"></CardImg>
                    <div>
                        <NavLink href="/tampil/MAYBELLINE"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>
                    </div>
                </Card>
            </Col>
            <Col sm="2">
                <Card body>
                    <CardTitle className="cardDandannaQu">WARDAH</CardTitle>
                    <CardImg src="images/logowardah.jpg"></CardImg>
                    <div>
                        <NavLink href="/tampil/WARDAH"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>
                    </div>
                </Card>
            </Col>
            <Col sm="2">
                <Card body>
                    <CardTitle className="cardDandannaQu">MAKE OVER</CardTitle>
                    <CardImg src="images/logomakeover.jpg"></CardImg>
                    <div>
                        <NavLink href="/tampil/MAKEOVER"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>
                    </div>
                </Card>
            </Col>
            <Col sm="2">
                <Card body>
                    <CardTitle className="cardDandannaQu">EMINA</CardTitle>
                    <CardImg src="images/logoemina.jpg"></CardImg>
                    <div>
                        <NavLink href="/tampil/EMINA"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>

                    </div>
                </Card>
            </Col>
            <Col sm="2">
                <Card body>
                    <CardTitle className="cardDandannaQu">NYX</CardTitle>
                    <CardImg src="images/logonyx.jpg"></CardImg>
                    <div>
                        <NavLink href="/tampil/NYX"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>
                    </div>
                </Card>
            </Col>
            <Col sm="2" className="p">
                <Card body >
                    <CardTitle className="cardDandannaQu">REVLON</CardTitle>
                    <CardImg src="images/logorevlon.png"></CardImg>
                    <div>
                        <NavLink href="/tampil/REVLON"><Button className="tabelbarang" color="light">VIEW</Button>
                        </NavLink>
                    </div>
                </Card>
            </Col>

        </Row>

    );
};
export default DandananQu