import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CSS/barang.css';

const api = 'http://localhost:3001'

class ListBrgMasuk extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang_masuk: [],
            response: '',
            diaplay: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampilbarangmasuk').then(res => {
            this.setState({
                barang_masuk: res.data.values
            })
        })
    }

    Deletebarangmasuk = (nonotmsk) => {
        const { barang_masuk } = this.state
        const data = qs.stringify({
            no_notamasuk: nonotmsk
        })

        axios.delete(api + '/hapusbarangmasuk',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    barang_masuk: barang_masuk.filter(barang_masuk => barang_masuk.no_notamasuk !== nonotmsk),
                    display: 'block'
                })
                this.props.history.push('/transaksi/barangmasuk')
            } else {
                this.setState({
                    response: json.data.values,
                    barang_masuk: barang_masuk.filter(barang_masuk => barang_masuk.no_notamasuk !== nonotmsk),
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        });
    }

    render() {
        return (
            <Container>
                <h2 className="headerbarang">DATA BARANG MASUK</h2>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/transaksi/barangmasuk/tambah"><Button className="tabelbarang" color="primary">TAMBAH DATA BARANG MASUK</Button></NavLink>
                <hr />
                <hr />
                <Table className="tabelbarang">

                    <thead>
                        <tr>

                            <th>Tanggal</th>
                            <th>Nama Distributor</th>
                            <th>Id Barang</th>
                            <th>Merk</th>
                            <th>Kategori</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Harga Persatuan</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.barang_masuk.map(barang_masuk =>
                            <tr key={barang_masuk.no_notamasuk}>
                                <td>{barang_masuk.tanggal}</td>
                                <td>{barang_masuk.nama_distributor}</td>
                                <td>{barang_masuk.id_barang}</td>
                                <td>{barang_masuk.merk}</td>
                                <td>{barang_masuk.kategori}</td>
                                <td>{barang_masuk.nama_barang}</td>
                                <td>{barang_masuk.jumlah}</td>
                                <td>{barang_masuk.harga_persatuan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/transaksi/barangmasuk/edit',
                                                state: {
                                                    no_notamasuk: barang_masuk.no_notamasuk,
                                                    tanggal: barang_masuk.tanggal,
                                                    nama_distributor: barang_masuk.nama_distributor,
                                                    id_barang: barang_masuk.id_barang,
                                                    merk: barang_masuk.merk,
                                                    kategori: barang_masuk.kategori,
                                                    nama_barang: barang_masuk.nama_barang,
                                                    jumlah: barang_masuk.jumlah,
                                                    harga_persatuan: barang_masuk.harga_persatuan
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>
                                    </Link>
                                    <span>

                                    </span>

                                    <Button onClick={() => this.Deletebarangmasuk(barang_masuk.no_notamasuk)} color="primary">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}


export default ListBrgMasuk