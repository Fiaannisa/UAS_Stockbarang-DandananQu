import React, { PureComponent } from 'react';
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input, Card, CardTitle, CardImg, NavLink, NavItem, Nav } from 'reactstrap'
import './CSS/Blog.css';
import username from '../Fungsional/tentang';

class FormLogin extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

render() {
    return (


        <Container>
            <img className="home" src="images/photo2.jpg" alt="" />
            <Container></Container>
            <h5 className="username">Username</h5>
            <FormGroup className="username">
                <Row>
                    <Col>
                        <Input className="username" name="username" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Masukkan Username" />
                        <div>
                            <username name="username" />
                        </div>

                    </Col>
                </Row>
            </FormGroup>
            <h5 className="username">Password</h5>
            <FormGroup>
                <Row>
                    <Col>
                        <Input className="username" type="text" value={this.state.password} onChange={this.handleChange} placeholder="Masukkan Password" />
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col>
                        <Button className="username" color="danger" type="button" href="/home">LOG IN</Button>
                    </Col>
                    <NavLink className="username2" href="/profil/tambahkaryawan">Belum Punya Akun?Buat disini!</NavLink>
                </Row>

            </FormGroup>

        </Container>





    )
}
}
export default FormLogin