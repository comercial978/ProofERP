import { useState } from "react";
import { ethers } from "ethers";
import contractData from "./ProofERP.json";
import "./App.css";

const contractAddress =
  "0x0356d853ce5c60a3478c9b71a0983a82a25e1855";

function App() {

  const [account, setAccount] = useState("");

  const [hash, setHash] = useState("");

  const [nome, setNome] = useState("");

  const [tipo, setTipo] = useState("");

  const [consultaHash, setConsultaHash] = useState("");

  const [resultado, setResultado] = useState(null);

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

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      buffer
    );

    const hashArray = Array.from(
      new Uint8Array(hashBuffer)
    );

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  async function registrarDocumento() {

    try {

      const provider = new ethers.BrowserProvider(
        window.ethereum
      );

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

  async function consultarDocumento() {

    try {

      const provider = new ethers.BrowserProvider(
        window.ethereum
      );

      const contract = new ethers.Contract(
        contractAddress,
        contractData.abi,
        provider
      );

      const data = await contract.verifyRecord(
        consultaHash
      );

      setResultado({
        existe: data[0],
        nome: data[1],
        tipo: data[2],
        timestamp: Number(data[3]),
        autor: data[4],
      });

    } catch (error) {

      console.error(error);

      alert("Erro ao consultar documento");
    }
  }

  return (

    <div className="container">

      <h1>ProofERP</h1>

      <button onClick={conectarWallet}>
        Conectar MetaMask
      </button>

      <p>{account}</p>

      <hr />

      <h2>Registrar Documento</h2>

      <input
        type="file"
        onChange={gerarHash}
      />

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

      <hr />

      <h2>Consultar Documento</h2>

      <input
        placeholder="Hash para consulta"
        value={consultaHash}
        onChange={(e) => setConsultaHash(e.target.value)}
      />

      <button onClick={consultarDocumento}>
        Consultar
      </button>

      {resultado && (

        <div className="resultado">

          <p>
            <strong>Existe:</strong>
            {" "}
            {resultado.existe ? "SIM" : "NÃO"}
          </p>

          <p>
            <strong>Nome:</strong>
            {" "}
            {resultado.nome}
          </p>

          <p>
            <strong>Tipo:</strong>
            {" "}
            {resultado.tipo}
          </p>

          <p>
            <strong>Autor:</strong>
            {" "}
            {resultado.autor}
          </p>

          <p>
            <strong>Data:</strong>
            {" "}
            {new Date(
              resultado.timestamp * 1000
            ).toLocaleString()}
          </p>

        </div>
      )}

    </div>
  );
}

export default App;