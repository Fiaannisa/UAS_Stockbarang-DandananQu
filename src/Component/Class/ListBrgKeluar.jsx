import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'
//tampilan list barang keluar
class ListBrgKeluar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            barang_keluar: [],
            response: '',
            diaplay: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampilbarangkeluar').then(res => {
            this.setState({
                barang_keluar: res.data.values
            })
        })
    }

    Deletebarangkeluar = (nonotluar) => {
        const { barang_keluar } = this.state
        const data = qs.stringify({
            no_notakeluar: nonotluar
        })

        axios.delete(api + '/hapusbarangkeluar',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    barang_keluar: barang_keluar.filter(barang_keluar => barang_keluar.no_notakeluar !== nonotluar),
                    display: 'block'
                })
                this.props.history.push('/transaksi/barangkeluar')
            } else {
                this.setState({
                    response: json.data.values,
                    barang_keluar: barang_keluar.filter(barang_keluar => barang_keluar.no_notakeluar !== nonotluar),
                    display: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        });
    }

    render() {
        return (
            <Container>
                <h2 className="headerbarang">DATA BARANG KELUAR</h2>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/transaksi/barangkeluar/tambah"><Button className="tabelbarang" color="primary">TAMBAH DATA BARANG KELUAR</Button></NavLink>
                <hr />
                <hr />
                <Table className="tabelbarang">

                    <thead>
                        <tr>

                            <th>Tanggal</th>
                            <th>Id Barang</th>
                            <th>Merk</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Harga Persatuan</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.barang_keluar.map(barang_keluar =>
                            <tr key={barang_keluar.no_notakeluar}>
                                <td>{barang_keluar.tanggal}</td>
                                <td>{barang_keluar.id_barang}</td>
                                <td>{barang_keluar.merk}</td>
                                <td>{barang_keluar.nama_barang}</td>
                                <td>{barang_keluar.jumlah}</td>
                                <td>{barang_keluar.harga_persatuan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/transaksi/barangkeluar/edit',
                                                state: {
                                                    no_notakeluar: barang_keluar.no_notakeluar,
                                                    tanggal: barang_keluar.tanggal,
                                                    id_barang: barang_keluar.id_barang,
                                                    merk: barang_keluar.merk,
                                                    nama_barang: barang_keluar.nama_barang,
                                                    jumlah: barang_keluar.jumlah,
                                                    harga_persatuan: barang_keluar.harga_persatuan
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletebarangkeluar(barang_keluar.no_notakeluar)} color="primary">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}


export default ListBrgKeluar