import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Web3 from "web3";

export default function Header(props) {
    const [networkName, setNetworkName] = useState("Undefined Network");
    const [showAddress, setShowAddress] = useState(false);
    const handleClose = () => setShowAddress(false);
    const handleShow = () => setShowAddress(true);

    const getWeb3 = () => {
        return new Promise(async (resolve, reject) => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                    resolve(web3);
                } catch (e) {
                    reject(e);
                }
            } else if (window.web3) {
                resolve(window.web3);
            } else {
                window.alert("Must install Metamask Extension!\nDApp will not load");
                reject("Must install Metamask Extension!");
            }
        });
    };

    const connectWeb3 = async () => {
        props.setLoading(true);
        const web3 = await getWeb3();
        const account = (await web3.eth.getAccounts())[0];
        const networkId = await web3.eth.net.getId();
        const accountBalance = Math.floor(parseFloat(web3.utils.fromWei(await web3.eth.getBalance(account))) * 100) / 100;
        props.setWeb3(web3);
        props.setAccount(account);
        props.setNetworkId(networkId);
        props.setAccountBalance(accountBalance);
        props.setLoading(false);
    }

    useEffect(() => {
        const findNetworkName = () => {
            if (props.networkId === 42) {
                setNetworkName("Kovan");
            } else if (props.networkId === 1) {
                setNetworkName("Mainnet");
            } else if (props.networkId === 5777) {
                setNetworkName("Local Test");
            }
        };
        findNetworkName();
    }, [props.networkId, props.accountBalance]);

    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg my-3">
                <div className="mr-auto">
                    <a href="/" className="heading-font navbar-brand ml-2">
                        Logo
                    </a>
                </div>

                <div className="ml-auto">
                {props.loading === true ? <Spinner className="text-align-center" animation="border" role="status" /> : null}
                {props.account !== "" ? <><span className="mx-1 network-name">{networkName}</span>
                    <div className="user-account-details d-inline ml-1">
                        <span className="mx-1">{props.accountBalance} ETH</span>
                        <span onClick={handleShow} className="ml-1 user-account-address">
                            {props.account.slice(0, 6) + "..." + props.account.slice(-4)}
                        </span>
                </div></> 
                    : <button onClick={connectWeb3} className="ml-1 btn btn-warning">
                            Connect Web3
                        </button>}
                        
                    </div>
            </nav>
            <hr className="mt-0 mb-5" />
            <Modal show={showAddress} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Account Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.account}</Modal.Body>
            </Modal>
        </div>
    );
}
