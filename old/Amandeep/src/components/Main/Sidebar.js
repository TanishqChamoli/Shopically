/*This is the side bar where the filters of the category will be stored
This categories will be stored in the database so you have to retrive it and show on this bar as link
frontend team will take care how it look
when clicking on the link the products of those category will be shown using the card*/

import React from 'react';
import { findAllByTestId } from '@testing-library/react';
const sidebar=()=>{
    return (
        <aside className="aside">
            <h1>Filters</h1>
        </aside>
    );
}

export default sidebar;
