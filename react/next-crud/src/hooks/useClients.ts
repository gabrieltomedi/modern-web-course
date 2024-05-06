import ClientCollection from "@/backend/db/ClientCollection";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useState } from "react";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const { tableVisible, showForm, showTable} = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empity());
  const [clients, setClients] = useState<Client[]>([]);
  

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empity());
    showForm()
  }

  return {
    tableVisible,
    client,
    clients,    
    selectClient,
    deleteClient,
    saveClient,
    newClient,
    getAll,
    showTable
  }
}
