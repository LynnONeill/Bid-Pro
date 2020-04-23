

function genHTML(clientObj, total, sortProducts) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bid-Pro</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            <nav class="navbar navbar-light bg-light">
                <span class="mx-auto navbar-brand mb-0 h1">Proposal</span>
            </nav>
            <div class="justify-content" id="header">
                <div class="row">
                    <div class="col">
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">${clientObj.name}</h5>
                                <p class="card-subtitle mb-2 text-muted">${clientObj.address}</p>
                                <p class="card-subtitle mb-2 text-muted">${clientObj.city}, ${clientObj.state} ${clientObj.zip}</p>
                                <p class="card-subtitle mb-2 text-muted">${clientObj.phone}</p>
                                <p class="card-subtitle mb-2 text-muted">${clientObj.email}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">Signature IronWorks</h5>
                                <p class="card-subtitle mb-2 text-muted">6126 N. Travel Center Dr.</p>
                                <p class="card-subtitle mb-2 text-muted">Tucson, AZ 85741</p>
                                <p class="card-subtitle mb-2 text-muted">(520)-884-5838</p>
                                <p class="card-subtitle mb-2 text-muted">sales@AffordableFenceandGates.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="QuoteBox">
                <div class="row">
                    ${sortProducts}
            <div id="total">
                <div class="row">
                    <div class="card w-100">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-6 font-weight-bold">Project Total:</div>
                                <div class="col-md-6 text-right font-weight-bold">$${total}.00</div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            <div id="acceptance">
                <p>Sign below to accept this proposal.</p>
                <div class="row">
                        <div>Signature:</div>
                        <div class="float-right">_________________________________</div>
                </div>
               
            </div>
    
    
        </div>
    
    
    </body>
    
    </html>`
}

module.exports = {
    genHTML: genHTML
}

