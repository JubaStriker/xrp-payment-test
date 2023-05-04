import SendXRP from "./wallet-UI/send-xrp";
import { WalletBalance } from "./wallet-UI/wallet-balance";
import { WalletInfo } from "./wallet-UI/wallet-info";
import { WalletSeed } from "./wallet-UI/wallet-seed";


export function SourceWallet() {
    return (
        <>
            <div className="text-center font-semibold text-2xl bg-cyan-400 py-1 mb-4 mx-3 text-white ">Source Wallet</div>
            <div className=" flex flex-col justify-center items-center w-full">

                <WalletSeed />
                <WalletInfo />
                <WalletBalance />
                <SendXRP />
            </div>
            <hr />
        </>
    );
}
