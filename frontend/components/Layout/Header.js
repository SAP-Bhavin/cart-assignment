import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import Link from "next/link"
import { useSelector } from "react-redux";
import { useState } from "react";
import Sidebar from "./Sidebar";
let Header = () => {
    let { cartProducts } = useSelector(state => state.cart),
        quantity = 0,
        [openSidebar, setOpenSidebar] = useState(false);
    if (cartProducts.length) {
        quantity = cartProducts.map(cp => cp.quantity).reduce((totalQuantity, quantity) => totalQuantity + quantity)
    }
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" sticky="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Link href="/">
                            Sabka Bazar
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className="header-left d-flex">
                                <Link href="/">
                                    <a className="nav-link">Home</a>
                                </Link>
                                <Link href="/products"><a className="nav-link">Products</a></Link>
                            </div>
                            <div className="header-right">
                                <span className="d-flex text-right">
                                    <Link href="/auth/signin"><a className="nav-link">Sign In</a></Link>
                                    <Link href="/auth/signup"><a className="nav-link">Register</a></Link>
                                </span>
                                <a className="nav-link cart-link" onClick={() => setOpenSidebar(true)}>
                                    <i className="fas fa-shopping-cart"></i> {quantity} Items
                                </a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Sidebar openSidebar={openSidebar} manageSidebar={() => setOpenSidebar(false)} />
        </>
    )
}

export default Header;