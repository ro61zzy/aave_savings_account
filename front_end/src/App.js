import React, { useState } from 'react';
import { ethers } from 'ethers';
import SavingsAccountABI from './SavingsAccount.json';

const savingsAccountAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
    const [provider, setProvider] = useState();
    const [signer, setSigner] = useState();
    const [contract, setContract] = useState();

    const connectWallet = async () => {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []);
        const signer = web3Provider.getSigner();
        const contract = new ethers.Contract(savingsAccountAddress, SavingsAccountABI, signer);
        setProvider(web3Provider);
        setSigner(signer);
        setContract(contract);
    };

    const deposit = async (amount) => {
        const tx = await contract.deposit(ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Deposit successful");
    };

    const withdraw = async (amount) => {
        const tx = await contract.withdraw(ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Withdrawal successful");
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            <button onClick={() => deposit("10")}>Deposit 10 DAI</button>
            <button onClick={() => withdraw("5")}>Withdraw 5 DAI</button>
        </div>
    );
}

export default App;
