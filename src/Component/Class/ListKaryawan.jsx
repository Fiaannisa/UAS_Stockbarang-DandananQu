import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import './CSS/barang.css';

const api = 'http://localhost:3001'

class ListKaryawan extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            karyawan: [],
            response: '',
            diaplay: 'none'

        }
    }
    componentDidMount() {
        axios.get(api + '/tampilkaryawan').then(res => {
            this.setState({
                karyawan: res.data.values
            })
        })
    }

    Deletekaryawan = (idkyr) => {
        const { karyawan } = this.state
        const data = qs.stringify({
            id_karyawan: idkyr
        })

        axios.delete(api + '/hapuskaryawan',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                console.log(json.data.status);
                this.setState({
                    response: json.data.values,
                    karyawan: karyawan.filter(karyawan => karyawan.id_karyawan !== idkyr),
                    display: 'block'
                })
                this.props.history.push('/profil/karyawan')
            } else {
                this.setState({
                    response: json.data.values,
                    karyawan: karyawan.filter(karyawan => karyawan.id_karyawan !== idkyr),
                    display: 'block'
                })

            }
        });
    }

    render() {
        return (
            <Container>
                <h2 className="headerbarang">DAFTAR KARYAWAN " DandananQu "</h2>
                <Alert className="form" color="warning" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                    <hr />
                <Table className="tabelbarang">
                    <thead>
                        <tr>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>E-Mail</th>
                            <th>Jenis Kelamin</th>
                            <th>Jabatan</th>
                            <th>Alamat</th>
                            <th>Password</th>
                            <th>Aksi</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.karyawan.map(karyawan =>
                            <tr key={karyawan.id_karyawan}>
                                <td>{karyawan.nik}</td>
                                <td>{karyawan.nama}</td>
                                <td>{karyawan.email}</td>
                                <td>{karyawan.jenis_kelamin}</td>
                                <td>{karyawan.jabatan}</td>
                                <td>{karyawan.alamat}</td>
                                <td>{karyawan.password}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/profil/karyawan/edit',
                                                state: {
                                                    id_karyawan: karyawan.id_karyawan,
                                                    nik: karyawan.nik,
                                                    nama: karyawan.nama,
                                                    email: karyawan.email,
                                                    jenis_kelamin: karyawan.jenis_kelamin,
                                                    jabatan: karyawan.jabatan,
                                                    alamat: karyawan.alamat,
                                                    password: karyawan.password
                                                }
                                            }
                                        }>
                                        <Button color="warning">Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletekaryawan(karyawan.id_karyawan)} color="primary">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )

    }
}

export default ListKaryawan