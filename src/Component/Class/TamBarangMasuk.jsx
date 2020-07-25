import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'
//tambah barang masuk
class TamBarangMasuk extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            no_notamasuk: '',
            tanggal: '',
            nama_distributor: '',
            id_barang: '',
            merk: '',
            kategori: '',
            nama_barang: '',
            jumlah: '',
            harga_persatuan: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addbarangmasuk= () => {
        axios.post(api + '/tambahbarangmasuk', {
            no_notamasuk: this.state.no_notamasuk,
            tanggal: this.state.tanggal,
            nama_distributor: this.state.nama_distributor,
            id_barang: this.state.id_barang,
            merk: this.state.merk,
            kategori: this.state.kategori,
            nama_barang: this.state.nama_barang,
            jumlah: this.state.jumlah,
            harga_persatuan: this.state.harga_persatuan,
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
                <h4 className="headerbarang">FORM DATA BARU MASUK</h4>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NOMOR NOTA BARANG MASUK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="no_notamasuk" value={this.state.no_notamasuk} onChange={this.handleChange} placeholder="NOMOR NOTA" />
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
                        <Col>
                            <Button color="danger" type="button" onClick={this.Addbarangmasuk}>SUBMIT</Button>
                        </Col>
                    </Col>
                </Form>


            </Container>
        )

    }
}

export default TamBarangMasuk