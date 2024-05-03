import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tables from "@/components/Tables";
import Client from "@/core/Client";
import Buttons from "@/components/Buttons";
import Forms from "@/components/Forms";
import React, { useEffect, useState } from "react";
import ClientRepository from "@/core/ClientRepository";
import ClientCollection from "@/backend/db/ClientCollection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empity())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }
  
  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Client) {
    await repo.delete(client)
    getAll()
  }

  async function clientSave(client: Client) {
    await repo.save(client)
    getAll()
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