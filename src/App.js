import { useIsConnected } from "@nice-xrpl/react-xrpl";
import { CreateDestinationWallet } from "./components/create-destination-wallet";
import { CreateSourceWallet } from "./components/create-source-wallet";
import { DestinationWallet } from "./components/destination-wallet";
import Navbar from "./components/navbar/Navbar";
import { SourceWallet } from "./components/source-wallet";

function App() {

  const isConnected = useIsConnected();

  return (
    <div>
      <Navbar />

      <div>
        <div>Connected: {isConnected ? "Yes" : "No"}</div>
        <div className="WalletWrapper">
          <CreateSourceWallet>
            <SourceWallet />
          </CreateSourceWallet>
        </div>

        <div className="">
          <CreateDestinationWallet>
            <DestinationWallet />
          </CreateDestinationWallet>
        </div>
      </div>
    </div>
  );
}

export default App;
