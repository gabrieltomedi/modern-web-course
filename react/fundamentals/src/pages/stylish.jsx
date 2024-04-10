import styles from "../styles/Stylish.module.css"
import Layout from "../components/Layout.jsx"

export default function Stylish() {
    return (
        <Layout title="Exemple of css modules">            
            <div className={styles.purple}>
                <h1>Style using modules</h1>                
            </div>
        </Layout>
    )
}