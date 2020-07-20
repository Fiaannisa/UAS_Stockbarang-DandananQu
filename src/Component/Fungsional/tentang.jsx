import React, { useState } from 'react';
import { CardBody, Col, Alert, Row, Form, FormGroup, Label, Input, Card, CardTitle, CardImg, NavLink, NavItem, Nav } from 'reactstrap'
import './CSS/Blog.css';


function tentang() {
    return (
        
        <Row>
            <Col sm="6">
                <Card body>
                    
                    <CardTitle className="cardDandannaQu"> SEKILAS TENTANG DandananQu </CardTitle>
                    <CardImg src="images/photo2.jpg"></CardImg>
                    <CardBody className="isi">
                            DandananQu ini adalah toko yang menjual berbagai macam Produk Kencantikan dari berbagai Brand Merk terkenal. 
                        Dengan adanya Aplikasi Website ini maka mempermudah Admin dalam melakukan pengecekan stock Produk yang terdapat dalam Gudang
                    </CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="cardDandannaQu"> SEKILAS TENTANG PEMILIK DandananQu </CardTitle>
                    <CardImg src="images/fia.jpg"></CardImg>
                    <CardBody className="isi">
                            DandananQu ini adalah Hasil Project Ulangan Akhir Semester (UAS) dari Mahasiswa Semester VI bernama 
                            FIA ANNISA dengan jurusan Sistem Informasi. Dibuatnya DandananQu ini karena Owner senang dengan Makeup sehingga
                            dibuatlah Project ini. TERIMAKASIH 
                    </CardBody>
                </Card>
            </Col>
        </Row>



    )
}
export default tentang