import React from 'react';
import { DashboardHeader } from '../../components';

//IMPORTANDO O CSS
import './dashboard.css';

export default () => {

    return (
        <section className='dashboard'>
            <DashboardHeader currentLink="all" className="header"/>

        </section>
    )
}