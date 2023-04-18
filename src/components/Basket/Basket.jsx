import React, { useState } from 'react';
import BasketItems from '../BasketItems/BasketItems';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import Header from '../Header/Header';
import Section from '../Section/Section';

function Basket({orders,onDelete,item}) {
    
    return (
        <div>
            <Header/>
            <Section>
            <Breadcrumbs/>
            <BasketItems
                        />
            </Section>
        </div>
    );
}


export default Basket;