import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

import './CSS/barang.css';

const api = "http://localhost:3001"
//tampilan Edit Komponen/Barang
class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            kode_barang: this.props.location.state.kode_barang,
            merk: this.props.location.state.merk,
            kategori: this.props.location.state.kategori,
            nama_barang: this.props.location.state.nama_barang,
            stock: this.props.location.state.stock,
            harga_persatuan: this.props.location.state.harga_persatuan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahBarang = (idbrg) => {
        const data = qs.stringify({
            id_barang: idbrg,
            kode_barang: this.state.kode_barang,
            merk: this.state.merk,
            kategori: this.state.kategori,
            nama_barang: this.state.nama_barang,
            stock: this.state.stock,
            harga_persatuan: this.state.harga_persatuan
        });

        axios.put(api + '/ubahbarang', data)
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
                <h4 className="headerbarang">FORM UPDATE DATA BARANG</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>KODE BARANG</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_barang" value={this.state.kode_barang} onChange={this.handleChange} placeholder="KODE BARANG" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>MERK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="merk" value={this.state.merk} onChange={this.handleChange} placeholder="MERK" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>KATEGORI</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kategori" value={this.state.kategori} onChange={this.handleChange} placeholder="KATEGORI" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>NAMA BARANG</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="NAMA BARANG" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>STOCK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="stock" value={this.state.stock} onChange={this.handleChange} placeholder="STOCK" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>HARGA PERSATUAN</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga_persatuan" value={this.state.harga_persatuan} onChange={this.handleChange} placeholder="HARGA PERSATUAN" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button color="warning" type="button" onClick={() => this.ubahBarang(this.state.id_barang)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>


            </Container>
        )
    }
}

export default EditComp