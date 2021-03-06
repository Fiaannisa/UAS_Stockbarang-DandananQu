import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

//tampilan edit barang keluar
const api = "http://localhost:3001"

class EditBarangKeluar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            no_notakeluar: this.props.location.state.no_notakeluar,
            tanggal: this.props.location.state.tanggal,
            id_barang: this.props.location.state.id_barang,
            merk: this.props.location.state.merk,
            nama_barang: this.props.location.state.nama_barang,
            jumlah: this.props.location.state.jumlah,
            harga_persatuan: this.props.location.state.harga_persatuan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahBarangkeluar = (nnotaklr) => {
        const data = qs.stringify({
            no_notakeluar: nnotaklr,
            tanggal: this.state.tanggal,
            id_barang: this.state.id_barang,
            merk: this.state.merk,
            nama_barang: this.state.nama_barang,
            jumlah: this.state.jumlah,
            harga_persatuan: this.state.harga_persatuan
        });

        axios.put(api + '/ubahbarangkeluar', data)
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
                <h4 className="headerbarang">FORM UPDATE DATA BARANG KELUAR</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NOMOR NOTA BARANG KELUAR</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="no_notakeluar" value={this.state.no_notakeluar} onChange={this.handleChange} placeholder="NOMOR NOTA BARANG KELUAR" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>TANGGAL</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="tanggal" value={this.state.tanggal} onChange={this.handleChange} placeholder="TANGGAL" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>ID BARANG</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="id_barang" value={this.state.id_barang} onChange={this.handleChange} placeholder="ID BARANG" />
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
                        <Label>NAMA BARANG</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="NAMA BARANG" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>JUMLAH</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jumlah" value={this.state.jumlah} onChange={this.handleChange} placeholder="JUMLAH" />
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
                                    <Button color="warning" type="button" onClick={() => this.ubahBarangkeluar(this.state.no_notakeluar)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>


            </Container>
        )
    }
}

export default EditBarangKeluar