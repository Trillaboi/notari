const axios = require('axios').default;

const postFaucet = async () => {
    const address = "ST2RTE5XV6MX9GP16XDR2Q5Y6ZPFBTDVYXQRHQ9QE"
    const response = await axios.post("http://localhost:3999/extended/v1/faucets/stx", {
    "address":address
}).catch(err => err)

// console.log(response);  
}

const getBalance = async () => {
    const principal = "ST2RTE5XV6MX9GP16XDR2Q5Y6ZPFBTDVYXQRHQ9QE"
    const response = await axios.get("http://localhost:3999/extended/v1/address/{principal}/stx").catch(err => console.log(err))
    // console.log(response);
}


getBalance()
// postFaucet();
