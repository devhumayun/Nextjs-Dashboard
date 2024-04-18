import Link from "next/link"
import styles from './menulink.module.css'
const MenuLink = ({ subCat }) => {
    return (
        <Link href={subCat.path} className={`${styles.submenuTitle}`}>
            {subCat.icon}
            {subCat.title}
        </Link>
    )
}

export default MenuLink
