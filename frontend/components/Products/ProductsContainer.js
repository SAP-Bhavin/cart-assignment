import { useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link";
import { useRouter } from "next/router";
import { getProductCatogories } from "../../redux/actions/homeActions";
import { getProducts } from "../../redux/actions/productActions";
import ProductCard from "./ProductCard";
let ProductsContainer = () => {
    let dispatch = useDispatch(),
        router = useRouter(),
        { products } = useSelector((state) => state.product),
        { productCategories } = useSelector((state) => state.home),
        converProduct2D = (products) => {
            let twoDProducts = [], arrCount = 0;
            for (let i = 0; i < products.length; i++) {
                if (!twoDProducts[arrCount]) {
                    twoDProducts[arrCount] = [];
                }
                twoDProducts[arrCount].push(products[i])
                if (twoDProducts[arrCount].length > 3) {
                    ++arrCount;
                }
            }
            return twoDProducts;
        };

    useEffect(() => {
        dispatch(getProductCatogories());
        dispatch(getProducts(router.query.category));
    }, [])

    useEffect(() => {
        dispatch(getProducts(router.query.category));
    }, [router.query])
    return (
        <Row className="product-container">
            <Col md={3} sm={3}>
                <ListGroup className="categories">
                    {
                        productCategories.map((pc) => <ListGroup.Item key={pc.key}>
                            <Link href={"/products?category=" + pc.id}>{pc.name}</Link>
                        </ListGroup.Item>)
                    }
                </ListGroup>
            </Col>
            <Col md={9} sm={9}>
                <Row>
                    {
                        converProduct2D(products).map((product) => product.map((prd) => {
                            return (
                                <Col md={3} sm={6} key={prd.id} >
                                    <ProductCard product={prd} />
                                </Col>
                            )
                        }))
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default ProductsContainer;