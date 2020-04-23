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
            {selectedClient.email === null|| selectedClient.email === "" ? "" : <li>{selectedClient.email}</li>}
            {selectedClient.phoneNumber === null||selectedClient.phoneNumber ===  "" ? "" : <li> {phone}</li>}
            {selectedClient.address === null|| selectedClient.address ==="" ? "" : <li>{selectedClient.address}</li>}
            {selectedClient.city === null && selectedClient.state === null ? "" : <li>{selectedClient.city}, {selectedClient.state}</li>}
            {selectedClient.zip === null||selectedClient.zip === "" ? "" : <li>{selectedClient.zip}</li>}
            {selectedClient.notes === null|| selectedClient.notes === "" ? "" : <li>{selectedClient.notes}</li>}
        </ul>


    )
}

export default ClientCard;