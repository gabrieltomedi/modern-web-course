import React from "react";
import Layout from "../components/Layout"
import Header from "../components/Header";

export default function Exemple() {
    return (     
        <Layout title="Using components">
            <Header title="Next.js and React" />
            <Header title="Learn Next.js in practices"/>
        </Layout>   
    )
}