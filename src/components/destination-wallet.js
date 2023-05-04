import { WalletBalance } from "./wallet-UI/wallet-balance";
import { WalletInfo } from "./wallet-UI/wallet-info";


export function DestinationWallet() {
    return (
        <>
            <div className="text-center font-semibold text-2xl bg-cyan-400 py-1 mb-4 mx-3 text-white ">Destination Wallet</div>
            <div className="flex flex-col justify-center items-center">

                <WalletInfo />
                <WalletBalance />
            </div>
        </>
    );
}
