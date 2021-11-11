import { Card, Col, Row, Button } from "react-bootstrap";
import Link from "next/link"
let ProductCategory = (props) => {
    let { category } = props;
    return (
        <Card className="product-category-card flex-row flex-wrap">
            <Card.Body>
                {
                    category.index % 2 === 0 ? <Row>
                        <Col md={4} sm={12}>
                            <img src={"http://localhost:3000/" + category.imageUrl} className="product-category-image" />
                        </Col>
                        <Col md={8} sm={12}>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.description}
                            </Card.Text>
                            <span className="btn btn-primary">
                                <Link href={"/products?category=" + category.id}>{'Explore ' + category.key}</Link>{' '}
                            </span>
                        </Col>
                    </Row> : <Row>
                        <Col md={8} sm={12}>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.description}
                            </Card.Text>
                            <span className="btn btn-primary">
                                <Link href="/">{'Explore ' + category.key}</Link>{' '}
                            </span>
                        </Col>
                        <Col md={4} sm={12}>
                            <img src={"http://localhost:3000/" + category.imageUrl} className="product-category-image" />
                        </Col>
                    </Row>
                }

            </Card.Body>
        </Card>
    )
}

export default ProductCategory;