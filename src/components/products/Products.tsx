import React, {useEffect, useState, FC} from 'react';
import {IProductsProps} from "../../interfaces/product.interface";
import {Product} from "../product/Product";

const Products: FC = () => {

    const [productsArr, setProductsArr] = useState<IProductsProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => {
            setProductsArr(products)
            }
    )
    }, []);


    return (
        <div>
            {
                productsArr.map((product: IProductsProps) =>
                    (<Product key={product.id} {...product}/>)
                )
            }
        </div>
    );
};

export {Products};