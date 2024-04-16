import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'

export default function ClientsCode() {
    const router = useRouter()

    return (
        <Layout title="Dynamic Navigation">
            <div>Code = {router.query.code} </div>
            <div>Branch = {router.query.branch} </div>
        </Layout>
    )
}