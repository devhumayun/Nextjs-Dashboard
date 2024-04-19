import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineDelete } from "react-icons/ai"
import { GoEye } from "react-icons/go"
import Pagination from '../pagination/Pagination'
import Search from '../search/Search'
import Button from './Button'
import styles from './user.module.css'

const User = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <Search placeholder="Search users..." />
                <Button />
            </div>
            <table className={styles.table}>
                <thead className={styles.tableheading}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                humayun@gmail.com
                            </span>
                        </td>
                        <td>1 hour</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.actionBtn}>
                                <Link href={"#"} className={styles.viewBtn}>
                                    <GoEye />
                                </Link>
                                <button className={styles.deleteBtn}>
                                    <AiOutlineDelete />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default User
