import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tables from "@/components/Tables";
import Client from "@/core/Client";
import Buttons from "@/components/Buttons";
import Forms from "@/components/Forms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 22, '2'),
    new Client('Gabriel', 32, '3'),
    new Client('Lucas', 18, '4'),
    new Client('Gustavo', 25, '5')
  ]
  
  function clientSelected(client: Client) {
    console.log(client.name)
  }

  function clientDeleted(client: Client) {
    console.log(`Delete ${client.name}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <Buttons color="green" className="mb-4">New Client</Buttons>
        </div>
        <Tables clients={clients} clientSelected={clientSelected} 
          clientDelete={clientDeleted}></Tables>
        <Forms client={clients[3]} />
      </Layout>
    </div>
  );
}