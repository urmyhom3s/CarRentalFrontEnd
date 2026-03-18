import styles from './topmenu.module.css'
import Link from 'next/link';

export default function topMenuItem ( { title, pageRef } : { title:string, pageRef:string} ) {
    return (
        <Link href={pageRef} className={styles.itemcontainer}>{title}</Link>
    );
}