import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CSS/barang.css';

const api = 'http://localhost:3001'
//tampilan list barang 
class ListComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang: [],
            response: '',
            diaplay: 'none'
        
        }
    }
    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                barang: res.data.values
            })
        })
    }

    Deletebarang = (idbrg) => {
        const { barang } = this.state
        const data = qs.stringify({
            id_barang: idbrg
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== idbrg),
                    display: 'block'
                })
                this.props.history.push('/barang')
            } else {
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== idbrg),
                    display: 'block'
                })

            }
        });
    }

    render() {
        return (
            <Container>
                <h2 className="headerbarang">DAFTAR PRODUK</h2>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barang/tambah"><Button className="tabelbarang" color="primary">TAMBAH DATA BARANG</Button></NavLink>
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
                            <th>Aksi</th>
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
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barang/edit',
                                                state: {
                                                    id_barang: barang.id_barang,
                                                    kode_barang: barang.kode_barang,
                                                    merk: barang.merk,
                                                    kategori: barang.kategori,
                                                    nama_barang: barang.nama_barang,
                                                    stock: barang.stock,
                                                    harga_persatuan: barang.harga_persatuan
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletebarang(barang.id_barang)} color="primary">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}

export default ListComp