import styles from "../styles/Stylish.module.css"
import Link from 'next/link'

export default function Stylish() {
    return (
        <div className={styles.purple}>
            <h1>Style using modules</h1>
            <Link href="/">Return</Link>
        </div>
    )
}