import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button, Container, Col, Alert, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahDistri extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            kode_distributor: '',
            nama_distributor: '',
            no_telp: '',
            alamat: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Adddistrobutor = () => {
        axios.post(api + '/tambahdistributor', {
            kode_distributor: this.state.kode_distributor,
            nama_distributor: this.state.nama_distributor,
            no_telp: this.state.no_telp,
            alamat: this.state.alamat,
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
                <h4 className="headerbarang">DATA DISTRIBUTOR BARU</h4>
                <Alert color="succes" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>KODE DISTRIBUTOR</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_distributor" value={this.state.kode_distributor} onChange={this.handleChange} placeholder="KODE DISTRIBUTOR" />
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
                        <Label>NO TELPON</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="no_telp" value={this.state.no_telp} onChange={this.handleChange} placeholder="NO TELPON" />
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
                        <Col>
                            <Button color="danger" type="button" onClick={this.Adddistrobutor}>SUBMIT</Button>
                        </Col>
                    </Col>
                </Form>


            </Container>
        )

    }
}

export default TambahDistri