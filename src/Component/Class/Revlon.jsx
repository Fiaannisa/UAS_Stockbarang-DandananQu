import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CSS/barang.css';

const api = 'http://localhost:3001'

class Revlon extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang: [],
            response: '',
            diaplay: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampil/REVLON').then(res => {
            this.setState({
                barang: res.data.values
            })
        })
    }


    render() {
        return (
            <Container>
                <h2 className="headerbarang">DAFTAR PRODUK</h2>
                <hr />
                <Table className="tabelbarang">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Merk</th>
                            <th>Kategori</th>
                            <th>Nama Barang</th>
                            <th>Stock</th>
                            <th>Harga Persatuan</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.barang.map(barang =>
                            <tr key={barang.id_barang}>
                                <td>{barang.kode_barang}</td>
                                <td>{barang.merk}</td>
                                <td>{barang.kategori}</td>
                                <td>{barang.nama_barang}</td>
                                <td>{barang.stock}</td>
                                <td>{barang.harga_persatuan}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}

export default Revlon