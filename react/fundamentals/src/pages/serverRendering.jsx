import Layout from "../components/Layout";

export function getServerSideProps() {
    return {
        props: {
            randomNumber: Math.random()
        }
    }
}

export default function serverRendering(props) {
    return (
        <Layout title="Server-side Rendering">
            <div>{props.randomNumber}</div>
        </Layout>
    )
}