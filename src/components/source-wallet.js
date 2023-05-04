import SendXRP from "./wallet-UI/send-xrp";
import { WalletBalance } from "./wallet-UI/wallet-balance";
import { WalletInfo } from "./wallet-UI/wallet-info";
import { WalletSeed } from "./wallet-UI/wallet-seed";


export function SourceWallet() {
    return (
        <div className="">
            <div className="text-center font-semibold text-2xl">Source Wallet</div>
            <WalletSeed />
            <WalletInfo />
            <WalletBalance />
            <SendXRP />
        </div>
    );
}
