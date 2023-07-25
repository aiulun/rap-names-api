const express = require('express')
const app = express()

const rappers = {
    '21 savage': {
        "age": 29,
        "birthName" : 'Shéyaa Bin Abraham-Joseph',
        "birthLocation" : 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennette',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
    
})

const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})