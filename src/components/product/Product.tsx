import React, {FC} from 'react';
import {IProductsProps} from "../../interfaces/product.interface";

const Product: FC<IProductsProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {

    return (
        <div>
            <li>{id} ,{title}, {description}, {price}, {discountPercentage}, {rating}, {stock}, {brand}, {category}, {thumbnail}, {images}</li>
        </div>
    );
};

export {Product};