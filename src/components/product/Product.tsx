import React, {FC} from 'react';

import {IProductsProps} from "../../interfaces/product.interface";
import styles from './styles/Product.module.css';


const Product: FC<IProductsProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail}) => {

    return (
        <div className={styles.mainDiv}>
            <li>{id} ,{title}, {description}, {price}, {discountPercentage}, {rating}, {stock}, {brand}, {category}</li>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};

export {Product};