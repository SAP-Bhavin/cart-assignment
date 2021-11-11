import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

let ProductCard = ({ product }) => {
    let dispatch = useDispatch(),
        { cartProducts } = useSelector(state => state.cart),
        buyNow = () => {
            dispatch(addToCart(product, cartProducts));
        }
    return (
        <Card className="product-card">
            <Card.Title>{product.name}</Card.Title>
            <Card.Img variant="top" src={"http://localhost:3000/" + product.imageURL} />
            <Card.Body>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {product.stock ? <> <span className="product-price">
                    MRP{' '} Rs.{product.price}
                </span>
                    <Button variant="primary" onClick={buyNow}>Buy Now</Button>{' '}
                </> : <span className="product-price text-danger"> Not Available</span>}
            </Card.Footer>
        </Card>
    )
}
export default ProductCard;