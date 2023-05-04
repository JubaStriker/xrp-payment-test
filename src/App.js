import { Networks, XRPLClient, useIsConnected } from "@nice-xrpl/react-xrpl";
import { CreateDestinationWallet } from "./components/create-destination-wallet";
import { CreateSourceWallet } from "./components/create-source-wallet";
import { DestinationWallet } from "./components/destination-wallet";
import Navbar from "./components/navbar/Navbar";
import { SourceWallet } from "./components/source-wallet";

function MainApp() {

  const isConnected = useIsConnected();

  return (
    <div>
      <Navbar />

      <div>
        <div className="text-center font-semibold text-3xl my-4">Connected: <span className="font-bold text-green-800">{isConnected ? "Yes" : "No"}</span></div>

        <div className="">
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




// Testnet address : wss://s.altnet.rippletest.net:51233

export default function App() {
  return (
    <div>

      {/* Main APP is wraped with client because every hook need the client to work */}

      <XRPLClient network={Networks.Testnet}>
        <MainApp />
      </XRPLClient>
    </div>
  );
}
