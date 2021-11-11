import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Carousel from 'react-bootstrap/Carousel'
import { getBanners } from "../../redux/actions/homeActions";
let Banner = () => {
    let dispatch = useDispatch(),
        banner = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getBanners());
    }, [])
    return (
        <Carousel fade indicators interval="1000">
            {
                banner.banners.map((bnr) =>
                    <Carousel.Item key={bnr.id}>
                        <img
                            className="d-block"
                            src={"http://localhost:3000" + bnr.bannerImageUrl}
                            alt={bnr.bannerImageAlt}
                        />
                    </Carousel.Item>)
            }
        </Carousel>
    )
}

export default Banner;