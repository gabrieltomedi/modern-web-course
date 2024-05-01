import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tables from "@/components/Tables";
import Client from "@/core/Client";
import Buttons from "@/components/Buttons";
import Forms from "@/components/Forms";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [client, setClient] = useState(Client.empity())

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 22, '2'),
    new Client('Gabriel', 32, '3'),
    new Client('Lucas', 18, '4'),
    new Client('Gustavo', 25, '5')
  ]
  
  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client) {
    console.log(`Delete ${client.name}`)
  }

  function clientSave(client: Client) {
    console.log(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.empity())
    setVisible('form')
  } 

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <React.Fragment>
          <div className="flex justify-end">
            <Buttons color="green" className="mb-4" 
              onClick={newClient}>
              New Client
            </Buttons>
          </div>
          <Tables clients={clients}             
            clientSelected={clientSelected} 
            clientDelete={clientDeleted} />              
        </React.Fragment>
        ) : (
          <Forms 
            client={client} 
            clientChange={clientSave}
            cancel={() => setVisible('table')}
          />
        )}        
      </Layout>
    </div>
  );
}