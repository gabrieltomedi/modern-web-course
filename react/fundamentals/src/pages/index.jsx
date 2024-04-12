import Link from 'next/link'
import Navbar from '../components/NavItem'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}> 
            <Navbar path="/stylish" title="Stylish"/>
            <Navbar path="/exemple" title="Exemple" color="#9400d3"/>
            <Navbar path="/navigation" title="Navigation #1" color="red"/>
            <Navbar path="/state" title="Component with state" color="brown"/>
        </div>
    )
}