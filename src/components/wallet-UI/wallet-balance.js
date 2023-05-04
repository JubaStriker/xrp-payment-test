import { useBalance } from "@nice-xrpl/react-xrpl";

export function WalletBalance() {
    // The useBalance hook gives you the balance of a wallet
    // This is a request hook, so it can be used with
    // a wallet or a wallet address.
    const balance = useBalance();

    return <div className="font-medium">Balance: <span className="text-green-600 font-semibold">{balance}</span></div>;
}
