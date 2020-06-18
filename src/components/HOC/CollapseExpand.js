import React from 'react';

import withToggle from "./withToggle"

const CollapseExpand = ({ toggle, toggleStatus, list}) => {
    return (
        <div>
            <h1>Min produkt lista</h1>

            <button onClick={toggle}>
                  {toggleStatus ? "Collapse": "Expand" }
            </button>

            {
                //toggleStatus &&  <div> {list.map( item=> (.... 

                toggleStatus?  <div> {list.map( item=> (
                    <li key={item.id}>{item.name}</li>
                ))} </div> : <span></span>
            }
        </div>
    )
}

export default withToggle(CollapseExpand)
