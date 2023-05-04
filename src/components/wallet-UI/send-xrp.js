import { Player } from '@lottiefiles/react-lottie-player';
import { ReserveRequirement, useBalance, useSendXRP } from '@nice-xrpl/react-xrpl';
import React, { useState } from 'react';

const SendXRP = () => {

    const sendXRP = useSendXRP();
    const balance = useBalance();

    const [destinationAddress, setDestinationAddress] = useState("");
    const [amount, setAmount] = useState();
    const [sending, setSending] = useState(false);
    const [transDetails, setTransDetails] = useState()
    const [showDetails, setShowDetails] = useState(false);
    console.log("trans", transDetails)

    return (
        <div>
            <div>
                Send
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
                    type="number"
                />
                XRP to
                <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.currentTarget.value)}
                    type="text"
                />
                -
                {sending ? (
                    <Player
                        src='https://assets6.lottiefiles.com/packages/lf20_b88nh30c.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '100px', width: '100px' }}
                    />
                ) : (
                    <button

                        className='px-3 mb-3 py-1 bg-green-600 text-white rounded-xl hover:bg-green-400 hover:font-medium'
                        onClick={async () => {
                            setSending(true);
                            try {
                                const result = await sendXRP(destinationAddress, amount);
                                console.log("UI: ", result);
                                setTransDetails(result)

                            } catch (e) {
                                alert(e);
                            }

                            setSending(false);
                        }}
                        disabled={
                            !amount ||
                            amount >= balance - ReserveRequirement ||
                            !destinationAddress
                        }
                    >
                        Send
                    </button>
                )}
            </div>
            {transDetails ? <div>
                <button onClick={() => setShowDetails(!showDetails)} className='px-3 mb-3 py-1 bg-amber-400 text-white rounded-xl hover:bg-amber-300 hover:font-medium'>
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
            </div> : ""}
            {showDetails ? <>
                <div className='max-w-5xl mx-auto border-2 border-gray-600 py-2 px-4 rounded-lg my-4 overflow-x-scroll'>
                    <h1>Account No: <span className=' text-green-900'>{transDetails.result.Account}</span></h1>
                    <h1>Receive's Account No: <span className=' text-green-900'>{transDetails.result.Destination}</span></h1>
                    <h1>Amount: {parseInt(transDetails.result.Amount) / 1000000}</h1>
                    <h1>Fee: <span className=' text-green-900'>{transDetails.result.Fee}</span></h1>
                    <h1>TransactionType
                        : <span className=' text-green-900'>{transDetails.result.TransactionType
                        }</span></h1>
                    <h1>TxnSignature: <span className='text-green-900'>{transDetails.result.TxnSignature
                    }</span>
                    </h1>


                </div>
            </> : ''}
        </div>
    );
};

export default SendXRP;