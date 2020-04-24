import React from "react";

function QuoteSummary({ queryProducts ,totalValue  }) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Project Summary</h5>
                <p className="card-text">Total Cost: ${totalValue}</p>
            </div>
            
            <button
                name="name"
                type="button"
                onClick={queryProducts}
            > Send PDF
            </button>
        </div>

    )
};

export default QuoteSummary;
