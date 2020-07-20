import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'


const api = "http://localhost:3001"

class EditKaryawan extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_karyawan: this.props.location.state.id_karyawan,
            nik: this.props.location.state.nik,
            nama: this.props.location.state.nama,
            email: this.props.location.state.email,
            jenis_kelamin: this.props.location.state.jenis_kelamin,
            jabatan: this.props.location.state.jabatan,
            alamat: this.props.location.state.alamat,
            password: this.props.location.state.password,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahkaryawan = (idkyr) => {
        const data = qs.stringify({
            id_karyawan: idkyr,
            nik: this.state.nik,
            nama: this.state.nama,
            email: this.state.email,
            jenis_kelamin: this.state.jenis_kelamin,
            jabatan: this.state.jabatan,
            alamat: this.state.alamat,
            password: this.state.password,
        });

        axios.put(api + '/ubahkaryawan', data)
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
                else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                <h4 className="headerbarang">FORM UPDATE DATA KARYAWAN</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NIK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nik" value={this.state.nik} onChange={this.handleChange} placeholder="NIK" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>NAMA</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="NAMA" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>E-MAIL</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="EMAIL" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>JENIS KELAMIN</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jenis_kelamin" value={this.state.jenis_kelamin} onChange={this.handleChange} placeholder="JENIS KELAMIN" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>JABATAN</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jabatan" value={this.state.jabatan} onChange={this.handleChange} placeholder="JABATAN" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>ALAMAT</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="ALAMAT" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>PASSWORD</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="PASSWORD" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button color="warning" type="button" onClick={() => this.ubahkaryawan(this.state.id_karyawan)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>


            </Container>
        )
    }
}
export default EditKaryawan