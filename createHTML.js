

function createHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bid-Pro</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{selectedClient}</h5>
      <p class="card-subtitle mb-2 text-muted">{address}</p>
      <p class="card-subtitle mb-2 text-muted">{city}{state}{zip}</p>
      <p class="card-subtitle mb-2 text-muted">{phone}</p>
      <p class="card-subtitle mb-2 text-muted">{email}</p>
    </div>
</div>`
}

module.exports = {
    createHTML: createHTML
}
