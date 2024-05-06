import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tables from "@/components/Tables";
import Buttons from "@/components/Buttons";
import Forms from "@/components/Forms";
import React from "react";
import useClients from "@/hooks/useClients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { 
    client, 
    clients, 
    tableVisible, 
    selectClient, 
    deleteClient, 
    newClient, 
    saveClient,
    showTable 
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <React.Fragment>
          <div className="flex justify-end">
            <Buttons color="green" className="mb-4" 
              onClick={newClient}>
              New Client
            </Buttons>
          </div>
          <Tables clients={clients}             
            clientSelected={selectClient} 
            clientDelete={deleteClient} />              
        </React.Fragment>
        ) : (
          <Forms 
            client={client} 
            clientChange={saveClient}
            cancel={showTable}
          />
        )}        
      </Layout>
    </div>
  );
}