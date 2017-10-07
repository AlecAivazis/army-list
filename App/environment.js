// external imports
const { Environment, Network, RecordSource, Store } = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create(async (operation, variables) => {
    // query the api
    const response = await fetch('https://api.graph.cool/relay/v1/army-list', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    })

    // jsonify the response
    return await response.json()
})

const environment = new Environment({
    network,
    store
})

export default environment
