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
        <div className="clientCard">
        <h2>Contact Information</h2>

        <ul>
            {selectedClient.name === null || selectedClient.name ==="" ? "" : <li><strong>Name:</strong> {selectedClient.name}</li>}
            {selectedClient.businessName === null|| selectedClient.businessName === "" ? "" : <li><strong>Business Name:</strong> {selectedClient.businessName}</li>}
            {selectedClient.email === null|| selectedClient.email === "" ? "" : <li><strong>Email:</strong> {selectedClient.email}</li>}
            {selectedClient.phoneNumber === null||selectedClient.phoneNumber ===  "" ? "" : <li><strong>Phone Number:</strong> {phone}</li>}
            {selectedClient.address === null|| selectedClient.address ==="" ? "" : <li><strong>Address:</strong> {selectedClient.address}</li>}
            {selectedClient.city === null && selectedClient.state === null ? "" : <li><strong>City/State:</strong> {selectedClient.city}, {selectedClient.state}</li>}
            {selectedClient.zip === null||selectedClient.zip === "" ? "" : <li><strong>Zip:</strong> {selectedClient.zip}</li>}
            {selectedClient.notes === null|| selectedClient.notes === "" ? "" : <li><strong>Notes:</strong> {selectedClient.notes}</li>}
        </ul>
        </div>

    )
}

export default ClientCard;