import Link from 'next/link'
import NavItem from '../components/NavItem'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}> 
            <NavItem path="/stylish" title="Stylish"/>
            <NavItem path="/exemple" title="Exemple" color="#9400d3"/>
            <NavItem path="/navigation" title="Navigation #1" color="red"/>
            <NavItem path="/clients/sp-2/123" title="Navigation #2" color="red"/>
            <NavItem path="/state" title="Component with state" color="brown"/>
            <NavItem path="/integration" title="API integraion" color="green"/>
        </div>
    )
}