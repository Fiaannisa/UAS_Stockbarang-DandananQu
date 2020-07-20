import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'
//form tambah barang keluar
class TambahBarangKeluar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            no_notakeluar: '',
            tanggal: '',
            id_barang: '',
            merk: '',
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

    Addbarangkeluar= () => {
        axios.post(api + '/tambahbarangkeluar', {
            no_notakeluar: this.state.no_notakeluar,
            tanggal: this.state.tanggal,
            id_barang: this.state.id_barang,
            merk: this.state.merk,
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
                <h4 className="headerbarang">FORM DATA BARU KELUAR</h4>
                <Alert color="succes" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NOMOR NOTA BARANG KELUAR</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="no_notakeluar" value={this.state.no_notakeluar} onChange={this.handleChange} placeholder="NOMOR NOTA" />
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
                        <Col>
                            <Button color="danger" type="button" onClick={this.Addbarangkeluar}>SUBMIT</Button>
                        </Col>
                    </Col>
                </Form>


            </Container>
        )

    }
}

export default TambahBarangKeluar