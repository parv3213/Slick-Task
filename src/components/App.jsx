import React, { useState } from "react";
import Landing from "./Landing.jsx";
import Header from "./Header.jsx";

export default function App() {
    const [web3, setWeb3] = useState(undefined);
    const [account, setAccount] = useState("");
    const [accountBalance, setAccountBalance] = useState("");
    const [networkId, setNetworkId] = useState(0);
    // const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Header
                networkId={networkId}
                account={account}
                accountBalance={accountBalance}
                loading={loading}
                setLoading={setLoading}
                setWeb3={setWeb3}
                setAccount={setAccount}
                setNetworkId={setNetworkId}
                setAccountBalance={setAccountBalance}
            />
            <div className="container">
            <Landing/>
            </div>
        </div>
    );
}
