import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {carService} from "../services/api.service";
import {CarsComponent} from "../component/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {PaginationComponent} from "../component/PaginationComponent";


const CarsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObject(value);
            }
        });
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next});
                break;
        }
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent changePage={changePage} prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
}

export {CarsPage};