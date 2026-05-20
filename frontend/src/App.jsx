import { useState } from "react";
import { ethers } from "ethers";
import contractData from "./ProofERP.json";
import "./App.css";

const contractAddress = "0x0356d853ce5c60a3478c9b71a0983a82a25e1855";

function App() {
  const [account, setAccount] = useState("");
  const [hash, setHash] = useState("");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  async function conectarWallet() {
    if (!window.ethereum) {
      alert("MetaMask não encontrada");
      return;
    }

    const contas = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(contas[0]);
  }

  async function gerarHash(event) {
    const arquivo = event.target.files[0];

    if (!arquivo) return;

    const buffer = await arquivo.arrayBuffer();

    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  async function registrarDocumento() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
  	contractAddress,
  	contractData.abi,
	signer
      );

      const tx = await contract.registerRecord(
        hash,
        nome,
        tipo
      );

      await tx.wait();

      alert("Documento registrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao registrar documento");
    }
  }

  return (
    <div className="container">
      <h1>ProofERP</h1>

      <button onClick={conectarWallet}>
        Conectar MetaMask
      </button>

      <p>{account}</p>

      <input type="file" onChange={gerarHash} />

      <input
        placeholder="Hash do documento"
        value={hash}
        readOnly
      />

      <input
        placeholder="Nome do documento"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="Tipo do documento"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />

      <button onClick={registrarDocumento}>
        Registrar Documento
      </button>
    </div>
  );
}

export default App;