import { useWallet } from "@nice-xrpl/react-xrpl";

export function WalletSeed() {
    // The useWallet hook gives you direct access to the
    // raw xrpl wallet - from here you can grab the seed
    // or any other information.
    const wallet = useWallet();

    return <div className="font-medium">Seed: <span className="text-pink-700 font-semibold hover:underline">{wallet.seed}</span></div>;

}