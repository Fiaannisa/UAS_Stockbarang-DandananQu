import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'
//tampilan list distributor
class ListDistributor extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            distributor: [],
            response: '',
            diaplay: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampildis').then(res => {
            this.setState({
                distributor: res.data.values
            })
        })
    }

    Deletedistributor = (iddst) => {
        const { distributor } = this.state
        const data = qs.stringify({
            id_distributor: iddst
        })

        axios.delete(api + '/hapusdistributor',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    distributor: distributor.filter(distributor => distributor.id_distributor !== iddst),
                    display: 'block'
                })
                this.props.history.push('/distributor')
            } else {
                this.setState({
                    response: json.data.values,
                    distributor: distributor.filter(distributor => distributor.id_distributor !== iddst),
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        });
    }

    render() {
        return (
            <Container>
                <h2 className="headerbarang">DATA DISTRIBUTOR</h2>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/distributor/tambah"><Button className="tabelbarang" color="primary">TAMBAH DATA DISTRIBUTOR</Button></NavLink>
                <hr />
                <hr />
                <Table className="tabelbarang">

                    <thead>
                        <tr>
                            <th>Kode Distributor</th>
                            <th>Nama Distributor</th>
                            <th>No.telp</th>
                            <th>Alamat</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.distributor.map(distributor =>
                            <tr key={distributor.id_distributor}>
                                <td>{distributor.kode_distributor}</td>
                                <td>{distributor.nama_distributor}</td>
                                <td>{distributor.no_telp}</td>
                                <td>{distributor.alamat}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/distributor/edit',
                                                state: {
                                                    id_distributor: distributor.id_distributor,
                                                    kode_distributor: distributor.kode_distributor,
                                                    nama_distributor: distributor.nama_distributor,
                                                    no_telp: distributor.no_telp,
                                                    alamat: distributor.alamat
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletedistributor(distributor.id_distributor)} color="primary">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}


export default ListDistributor