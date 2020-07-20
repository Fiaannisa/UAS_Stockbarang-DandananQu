import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'

//tampilan edit disributor
const api = "http://localhost:3001"

class EditDist extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_distributor: this.props.location.state.id_distributor,
            kode_distributor: this.props.location.state.kode_distributor,
            nama_distributor: this.props.location.state.nama_distributor,
            no_telp: this.props.location.state.no_telp,
            alamat: this.props.location.state.alamat,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahdistributor = (iddsti) => {
        const data = qs.stringify({
            id_distributor: iddsti,
            kode_distributor: this.state.kode_distributor,
            nama_distributor: this.state.nama_distributor,
            no_telp: this.state.no_telp,
            alamat: this.state.alamat,
        });

        axios.put(api + '/ubahdistributor', data)
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
                <h4 className="headerbarang">FORM UPDATE DATA DISTRIBUTOR</h4>
                <Alert color="succes" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <span> </span>
                    <div></div>

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
                        <Label>NO TELP</Label>
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

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button color="warning" type="button" onClick={() => this.ubahdistributor(this.state.id_distributor)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>


            </Container>
        )
    }
}

export default EditDist