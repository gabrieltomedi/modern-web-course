import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {
    let [number, setNumber] = useState(0) // React Hooks

    function increase() {
        setNumber(number + 1)      
    }

    return (
        <Layout title="Component with state">
            <div>{number}</div>
            <button onClick={increase}>Increase</button>
        </Layout>
    )
}