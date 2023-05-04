import { WalletBalance } from "./wallet-UI/wallet-balance";
import { WalletInfo } from "./wallet-UI/wallet-info";


export function DestinationWallet() {
    return (
        <div className="Wallet">
            <div className="WalletRow header">Destination Wallet</div>
            <WalletInfo />
            <WalletBalance />
        </div>
    );
}
