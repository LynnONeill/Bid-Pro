import React from "react";
import Dropdown from "react-bootstrap/Dropdown";





function DropDown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Select Product
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Single Security Door</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Double Security Door</Dropdown.Item>
                <Dropdown.Item href="#/action-3">French Security Door</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropDown;