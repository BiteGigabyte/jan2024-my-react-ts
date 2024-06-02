import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps {
    cars: ICarWithAuthModel[];
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            <div>
                {cars.map(car => <div key={car.id}>{car.id}: {car.brand}</div>)}
            </div>
        </div>
    );
};

export {CarsComponent};