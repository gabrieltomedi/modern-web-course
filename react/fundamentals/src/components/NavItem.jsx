import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function NavItem(props) {
    return (
        <Link href={props.path} passHref> 
            <div className={styles.navitem} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.title}
            </div>
        </Link>
    )
}