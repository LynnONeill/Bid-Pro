import React from "react";

function QuoteSummary({ sendPDF,totalValue }) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Project Summary</h5>
                <p className="card-text">Total Cost: ${totalValue}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">product info to go here</li>
            </ul>
            <button
                name="name"
                type="button"
                onClick={sendPDF}
            > Send PDF
            </button>
        </div>

    )
};

export default QuoteSummary;
