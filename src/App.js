import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';

import NavbarComp from './Component/Fungsional/NavbarComp';

import HomePage from './Component/Fungsional/HomePage';

import { Form } from 'reactstrap';
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import ListDistributor from './Component/Class/ListDistributor';
import TambahDistri from './Component/Class/TambahDistri';
import EditDist from './Component/Class/EditDist';
import ListBrgMasuk from './Component/Class/ListBrgMasuk';
import TamBarangMasuk from './Component/Class/TamBarangMasuk';
import ListBrgKeluar from './Component/Class/ListBrgKeluar';
import TambahBarangKeluar from './Component/Class/TambahBarangKeluar';
import EditBarangMasuk from './Component/Class/EditBarangMasuk';
import EditBarangKeluar from './Component/Class/EditBarangKeluar';
import DandananQu from './Component/Fungsional/DandananQu';
import Emina from './Component/Class/Emina';
import Wardah from './Component/Class/Wardah';
import Makeover from './Component/Class/Makeover';
import NYX from './Component/Class/NYX';
import Revlon from './Component/Class/Revlon';
import Maybelline from './Component/Class/Maybelline';
import FormLogin from './Component/Fungsional/FormLogin';
import FormRegister from './Component/Fungsional/FormRegister';
import ListKaryawan from './Component/Class/ListKaryawan';
import EditKaryawan from './Component/Class/EditKaryawan';
import tentang from './Component/Fungsional/tentang';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={FormLogin} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/DandananQu" component={DandananQu} />
        <Route exact path="/tampil/EMINA" component={Emina} />
        <Route exact path="/tampil/WARDAH" component={Wardah} />
        <Route exact path="/tampil/MAKEOVER" component={Makeover} />
        <Route exact path="/tampil/NYX" component={NYX} />
        <Route exact path="/tampil/REVLON" component={Revlon} />
        <Route exact path="/tampil/MAYBELLINE" component={Maybelline} />
        <Route exact path="/barang" component={ListComp} />
        <Route exact path="/barang/tambah" component={TambahComp} />
        <Route exact path="/barang/edit" component={EditComp} />
        <Route exact path="/transaksi/barangmasuk" component={ListBrgMasuk} />
        <Route exact path="/distributor" component={ListDistributor} />
        <Route exact path="/distributor/tambah" component={TambahDistri} />
        <Route exact path="/distributor/edit" component={EditDist} />
        <Route exact path="/transaksi/barangmasuk/tambah" component={TamBarangMasuk} />
        <Route exact path="/transaksi/barangkeluar" component={ListBrgKeluar} />
        <Route exact path="/transaksi/barangkeluar/tambah" component={TambahBarangKeluar} />
        <Route exact path="/transaksi/barangmasuk/edit" component={EditBarangMasuk} />
        <Route exact path="/transaksi/barangkeluar/edit" component={EditBarangKeluar} />
        <Route exact path="/profil/karyawan" component={ListKaryawan} />
        <Route exact path="/profil/karyawan/edit" component={EditKaryawan} />
        <Route exact path="/profil/tambahkaryawan" component={FormRegister} />
        <Route exact path="/tentangdandananqu" component={tentang} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
