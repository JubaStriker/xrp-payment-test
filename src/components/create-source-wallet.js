import { Player } from "@lottiefiles/react-lottie-player";
import { useCreateWallet, Wallet } from "@nice-xrpl/react-xrpl";
import { useState } from "react";

export function CreateSourceWallet({ children }) {
    const [seed, setSeed] = useState("");
    const [sending, setSending] = useState(false);

    // When connected to the testnet/dev net, you can
    // use the useCreateWallet series of hooks to create
    // a wallet and fund it from the faucet.
    const createWallet = useCreateWallet();

    // The Wallet component is used when you have
    // credentials. It enables the use of all
    // transactional hooks and all request hooks.
    return seed ? (
        <Wallet seed={seed}>{children}</Wallet>
    ) : (
        <div className="w-full flex justify-center">
            {!sending ? (
                <button
                    className="px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 hover:font-medium"
                    onClick={async () => {
                        setSending(true);
                        const initialState = await createWallet("1048");

                        setSending(false);

                        if (initialState.wallet.seed) {
                            console.log("created wallet: ", initialState);
                            setSeed(initialState.wallet.seed);
                        }
                    }}
                >
                    Create source wallet
                </button>
            ) : (
                <div className="w-full flex justify-center">
                    <Player
                        src='https://assets6.lottiefiles.com/packages/lf20_b88nh30c.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '100px', width: '100px' }}
                    />
                </div>
            )}
        </div>
    );
}
