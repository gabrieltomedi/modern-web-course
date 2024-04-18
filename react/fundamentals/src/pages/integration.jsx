import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integration() {
    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    async function fetchClient() {
        const resp = await fetch(`http://localhost:3000/api/clients/${code}`)            
        const data = await resp.json()
        setClient(data)

        // fetch(`http://localhost:3000/api/clients/${code}`)            
        //     .then(resp => resp.json())
        //     .then(data => setClient(data))
    } 

    return (
        <Layout title="API integration">
            <div>
                <input type='number' value={code} 
                    onChange={e => setCode(e.target.value)}/>
                <button onClick={fetchClient}>Fetch Client</button>
            </div>
            <ul>
                <li>Id: {client.id}</li>
                <li>Name: {client.name} </li>
                <li>Email: {client.email}</li>
            </ul>   
        </Layout>
    )
}