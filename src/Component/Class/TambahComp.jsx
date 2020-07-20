import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'
//form tambah barang 
class TambahComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kode_barang: '',
            merk: '',
            kategori: '',
            nama_barang: '',
            stock: '',
            harga_persatuan: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Addbarang = () => {
        axios.post(api + '/tambahbarang', {
            kode_barang: this.state.kode_barang,
            merk: this.state.merk,
            kategori: this.state.kategori,
            nama_barang: this.state.nama_barang,
            stock: this.state.stock,
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
                <h4 className="headerbarang">DATA BARANG BARU</h4>
                <Alert color="succes" style={{ display: this.state.display }}>
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
                        <Col>
                            <Button color="danger" type="button" onClick={this.Addbarang}>SUBMIT</Button>
                        </Col>
                    </Col>
                </Form>


            </Container>
        )

    }
}

export default TambahComp