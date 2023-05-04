import React from 'react';
import { Client } from 'xrpl';

const Main = () => {

    async function main() {

        // Define the network client
        const client = new Client("wss://s.altnet.rippletest.net:51233")
        await client.connect()

        // ... custom code goes here

        // const PUBLIC_SERVER = "wss://xrplcluster.com/"
        // const client = new xrpl.Client(PUBLIC_SERVER)
        // await client.connect()


        // Create a wallet and fund it with the Testnet faucet:
        const fund_result = await client.fundWallet()
        const test_wallet = fund_result.wallet
        console.log("fund res", fund_result)
        console.log("test wallet", test_wallet)



        // Disconnect when done (If you omit this, Node.js won't end the process)
        // client.disconnect()
    }

    main()
    return (
        <div>
            Main function running
        </div>
    );
};

export default Main;