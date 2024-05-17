import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../components";
import {FooterComponent} from "../components";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <hr/>
            <Outlet/>
            <hr/>
            <FooterComponent/>
        </div>
    );
};

export {MainLayout};