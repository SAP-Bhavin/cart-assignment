import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Link from "next/link"
import { addToCart, productRemove } from "../../redux/actions/cartActions";
let Sidebar = (props) => {
    let { cartProducts } = useSelector(state => state.cart),
        dispatch = useDispatch(),
        manageProduct = (product, operation = 'plus') => {
            console.log(operation);
            dispatch(operation === 'plus' ? addToCart(product, cartProducts) : productRemove(product, cartProducts))
        },
        quantity = 0,
        totalAmount = 0;
    if (cartProducts.length) {
        quantity = cartProducts.map(cp => cp.quantity).reduce((totalQuantity, quantity) => totalQuantity + quantity);
        totalAmount = cartProducts.map(cp => cp.productPrice).reduce((productPriceTotal, productPrice) => productPriceTotal + productPrice)
    }
    return (
        <Offcanvas show={props.openSidebar} onHide={props.manageSidebar} placement='end' className="product-carts">
            <Offcanvas.Header>
                <Offcanvas.Title>My Cart {quantity > 0 && '(' + quantity + ' item)'}</Offcanvas.Title>
                <span className="close-button" onClick={props.manageSidebar}>+</span>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    quantity === 0 ?
                        <>
                            <div className="no-content">
                                <h6> No items in your cart</h6>
                                <p>Your favourite items just a click away</p>
                            </div>
                            <span className="btn btn-primary w-100" onClick={() => {
                                props.manageSidebar()
                            }} >
                                <Link href="/products"> Start Shopping</Link>
                            </span>
                        </>
                        : <>
                            {cartProducts.map(cp =>
                                <>
                                    <div className="cart-item">
                                        <img src={"http://localhost:3000/" + cp.imageURL} className="sidebar-product-img" />
                                        <div className="cart-item-detail">
                                            <h6>{cp.name}</h6>
                                            <span className="align-item-center">
                                                <span>
                                                    <Button variant="primary" onClick={() => manageProduct(cp, 'minus')}>-</Button>
                                                    {cp.quantity}
                                                    <Button variant="primary" onClick={() => manageProduct(cp)}>+</Button>
                                                    <span className="btn-close"></span>
                                                    Rs. {cp.price}
                                                </span>
                                                <span className="cart-product-price"> Rs. {cp.productPrice}</span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                            <span className="w-100 promo-text">
                                Promo can be appplied in payment page
                            </span>
                            <span className="btn btn-primary w-100" onClick={() => {
                                props.manageSidebar()
                            }} >
                                <span className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <Link href="/products">
                                        Proceed to Checkout
                                    </Link>
                                    <span>
                                        Rs. {totalAmount} <i className="fas fa-chevron-right"></i>
                                    </span>
                                </span>
                            </span>
                        </>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar;