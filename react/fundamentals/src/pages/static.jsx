import Layout from "../components/Layout";

export function getStaticProps() {
    return {
        props: {
            randomNumber: Math.random()
        }
    }
}

export default function static1(props) {
    return (
        <Layout title="Static Content">
            <div>{props.randomNumber}</div>
        </Layout>
    )
}