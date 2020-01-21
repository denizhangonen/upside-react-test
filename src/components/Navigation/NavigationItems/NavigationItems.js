import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="navigationItems">
        <NavigationItem link="/" exact>Pizza Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem> 
    </ul>
);

export default navigationItems;