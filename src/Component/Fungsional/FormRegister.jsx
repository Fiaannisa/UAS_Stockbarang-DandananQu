import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'


//form register

class FormRegister extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            nik: '',
            nama: '',
            email: '',
            jenis_kelamin: '',
            jabatan: '',
            alamat: '',
            password: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addkaryawan = () => {
        axios.post(api + '/tambahkaryawan', {
            nik: this.state.nik,
            nama: this.state.nama,
            email: this.state.email,
            jenis_kelamin: this.state.jenis_kelamin,
            jabatan: this.state.jabatan,
            alamat: this.state.alamat,
            password: this.state.password,
        }).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4 className="headerbarang">FORM REGISTRASI KARYAWAN BARU</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NIK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nik" value={this.state.nik} onChange={this.handleChange} placeholder="MASUKKAN NIK" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>NAMA</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="MASUKKAN NAMA" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>E-MAIL</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="MASUKKAN E-MAIL" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>JENIS KELAMIN</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="MASUKKAN JENIS KELAMIN" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>JABATAN</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jabatan" value={this.state.jabatan} onChange={this.handleChange} placeholder="MASUKKAN JABATAN" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>ALAMAT</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="MASUKKAN ALAMAT" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>PASSWORD</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="MASUKKAN PASSWORD" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Col>
                            <Button color="danger" type="button" onClick={this.Addkaryawan}>SUBMIT</Button>
                            <span>    </span>
                            <Button color="danger" type="button" href="/" >LOGIN</Button>
                        </Col>
                    </Col>
                </Form>


            </Container>
        )

    }
}

export default FormRegister