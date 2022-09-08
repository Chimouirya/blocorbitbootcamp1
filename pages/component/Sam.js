import styles from "../../styles/Home.module.css"
import Link from "next/link";
export default function Sam(){
    return(
        <nav className={styles.sam}>
            <ul>
                <li>Home</li>
                <Link href="/re">
                <a>
                    <li>Register</li> </a></Link>
                <li>Blog</li>
                <li>Contact Us</li>
                <Link href="/login">
                    <a>
                        <li>Login</li></a></Link>
            </ul>
        </nav>
    );
}