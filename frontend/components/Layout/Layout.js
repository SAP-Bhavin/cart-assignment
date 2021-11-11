import React from "react";
import PropTypes from "prop-types"
import Header from "./Header";
import Footer from "./Footer";
import NProgress from "nprogress";
import Router from "next/router";
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
import "nprogress/nprogress.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
let Layout = ({ children }) => {
    return (<>
        <Header />
        <Container fluid>
            {children}
        </Container>
        < Footer />
    </>
    )
}

export default Layout;

Layout.propTypes = {
    children: PropTypes.any,
}