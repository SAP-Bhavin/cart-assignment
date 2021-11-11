import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductCatogories } from "../../redux/actions/homeActions";
import ProductCategory from "./ProductCategory";
let ProductCategories = () => {
    let dispatch = useDispatch(),
        { productCategories } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getProductCatogories());
    }, []);
    return (
        <>
            {productCategories.map((pc, index) => <ProductCategory category={{ ...pc, 'index': index }} key={pc.id} />)}
        </>
    )
}

export default ProductCategories;