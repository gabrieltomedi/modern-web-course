import Client from '@/core/Client'
import Input from './Input'
import { useState } from 'react'
import Buttons from './Buttons'

interface FormsProps {
    client: Client
    clientChange?: (client: Client) => void
    cancel?: () => void
}

export default function Forms(props: FormsProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client.name ?? '')
    const [age, setAge] = useState(props.client.age ?? '')

    return (
        <div>    
            {id ? (
                <Input text="Code" readOnly value={id} className='mb-4' />        
            ) : false}
            <Input text="Name" value={name} onChange={setName} className='mb-4'/>
            <Input text="Age" type='number' value={age} onChange={setAge} />
            <div className='flex justify-end mt-7 font-bold'>
                <Buttons color='blue' className='mr-2' 
                    onClick={() => props.clientChange?.(new Client(name, +age, id))}>
                    {id ? 'Update' : 'Save'}
                </Buttons>
                <Buttons onClick={props.cancel}>
                    Cancel
                </Buttons>
            </div>
        </div>
    )
}