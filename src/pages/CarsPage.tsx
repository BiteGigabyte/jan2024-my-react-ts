import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {CarsComponent} from "../component/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const CarsPage = () => {

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })

    useEffect(() => {
        carService.getCars().then(value => {
            if (value) {
                setCarsPaginatedObject(value);
            }
        });
    }, []);

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
        </div>
    );
};

export {CarsPage};