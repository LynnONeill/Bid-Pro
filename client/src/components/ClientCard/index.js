import React, { useContext } from "react";
import ClientContext from "../../utils/GlobalState"

function ClientCard() {
    const { selectedClient } = useContext(ClientContext)
    let phone;
    if (selectedClient.phoneNumber) {
        phone = selectedClient.phoneNumber.toString().length === 10 ? (
            ['(', selectedClient.phoneNumber.toString().slice(0, 3), ") ", selectedClient.phoneNumber.toString().slice(3, 6), "-", selectedClient.phoneNumber.toString().slice(6, 10)].join('')
        ) : selectedClient.phoneNumber
    }
    return (
        <ul>
            {selectedClient.name === null || selectedClient.name ==="" ? "" : <li>{selectedClient.name}</li>}
            {selectedClient.businessName === null|| selectedClient.businessName === "" ? "" : <li>{selectedClient.businessName}</li>}
            {selectedClient.email === null|| "" ? "" : <li>{selectedClient.email}</li>}
            {selectedClient.phoneNumber === null|| "" ? "" : <li> {phone}</li>}
            {selectedClient.address === null|| "" ? "" : <li>{selectedClient.address}</li>}
            {selectedClient.city === null && selectedClient.state === null ? "" : <li>{selectedClient.city}, {selectedClient.state}</li>}
            {selectedClient.zip === null|| "" ? "" : <li>{selectedClient.zip}</li>}
            {selectedClient.notes === null|| "" ? "" : <li>{selectedClient.notes}</li>}
        </ul>


    )
}

export default ClientCard;