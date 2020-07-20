import React, { useState } from 'react';
import './CSS/Blog.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <img className="homeblognavbar" src="images/iconfikss.png" alt=""/>
            <NavItem>
              <NavLink href="/">DandananQu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/DandananQu">Produk By DandananQu</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret >
                MASTER
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/barang">BARANG</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/distributor">DISTRIBUTOR</NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                TRANSAKSI
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/transaksi/barangmasuk">BARANG MASUK</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/transaksi/barangkeluar">BARANG KELUAR</NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                PROFIL
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/profil/karyawan">KARYAWAN</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/tentangdandananqu">DandananQu</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/logout">LOGOUT</NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="navbar" >Project UAS Pemorgraman Web</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComp