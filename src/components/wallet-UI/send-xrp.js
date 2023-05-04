import { ReserveRequirement, useBalance, useSendXRP } from '@nice-xrpl/react-xrpl';
import React, { useState } from 'react';

const SendXRP = () => {

    const sendXRP = useSendXRP();
    const balance = useBalance();

    const [destinationAddress, setDestinationAddress] = useState("");
    const [amount, setAmount] = useState(48);
    const [sending, setSending] = useState(false);

    return (
        <div>
            Send{" "}
            <input
                value={amount}
                onChange={(e) => setAmount(parseInt(e.currentTarget.value, 10))}
                type="number"
            />{" "}
            XRP to{" "}
            <input
                value={destinationAddress}
                onChange={(e) => setDestinationAddress(e.currentTarget.value)}
                type="text"
            />{" "}
            -{" "}
            {sending ? (
                "Waiting for response..."
            ) : (
                <button
                    onClick={async () => {
                        setSending(true);
                        try {
                            const result = await sendXRP(destinationAddress, amount);
                            console.log("UI: ", result);
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
    );
};

export default SendXRP;