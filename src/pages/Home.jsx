import { useEffect, useState } from "react";
import {ItemListContainer, Loader} from "../components/";
import { getAllProducts } from "../services/products.service";


export const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProductsData(res.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <ItemListContainer products={productsData} />
    );
};

