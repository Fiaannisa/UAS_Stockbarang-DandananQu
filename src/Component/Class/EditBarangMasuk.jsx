import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

//tampilan edit barang mauk
const api = "http://localhost:3001"

class EditBarangMasuk extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            no_notamasuk: this.props.location.state.no_notamasuk,
            tanggal: this.props.location.state.tanggal,
            nama_distributor: this.props.location.state.nama_distributor,
            id_barang: this.props.location.state.id_barang,
            merk: this.props.location.state.merk,
            kategori: this.props.location.state.kategori,
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

    ubahBarangmasuk = (nnotamsk) => {
        const data = qs.stringify({
            no_notamasuk: nnotamsk,
            tanggal: this.state.tanggal,
            nama_distributor: this.state.nama_distributor,
            id_barang: this.state.id_barang,
            merk: this.state.merk,
            kategori: this.state.kategori,
            nama_barang: this.state.nama_barang,
            jumlah: this.state.jumlah,
            harga_persatuan: this.state.harga_persatuan
        });

        axios.put(api + '/ubahbarangmasuk', data)
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
                <h4 className="headerbarang">FORM UPDATE DATA BARANG MASUK</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NOMOR NOTA BARANG MASUK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="no_notamasuk" value={this.state.no_notamasuk} onChange={this.handleChange} placeholder="NOMOR NOTA BARANG MASUK" />
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
                        <Label>NAMA DISTRIBUTOR</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_distributor" value={this.state.nama_distributor} onChange={this.handleChange} placeholder="NAMA DISTRIBUTOR" />
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
                                    <Button color="warning" type="button" onClick={() => this.ubahBarangmasuk(this.state.no_notamasuk)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>


            </Container>
        )
    }
}

export default EditBarangMasuk