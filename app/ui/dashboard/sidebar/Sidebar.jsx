
import Image from 'next/image';
import styles from './sidebar.module.css';

import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard,
    MdHelpCenter,
    MdOutlineLogout,
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle,
    MdWork
} from "react-icons/md";
import MenuLink from './menulink/MenuLink';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.userProfile}`} >
                <Image
                    src="/noavatar.png"
                    height={100}
                    width={100}
                    alt='no-avatar'
                    className={`${styles.userImage}`}
                />
                <div className={`${styles.userInfo}`}>
                    <h2 className={`${styles.name}`}> Humayun </h2>
                    <span className={`${styles.role}`}>Admin </span>
                </div>
            </div>
            <div>
                <ul className={`${styles.menuList}`}>
                    {
                        menuItems.map((cat) => (
                            <li key={cat.title} className={`${styles.MenuName}`}>
                                <span className={`${styles.menuTitle}`}> {cat.title} </span>
                                {
                                    cat.list.map((subCat) => (
                                        <MenuLink subCat={subCat} key={subCat.title} />
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <form action="">
                    <button className={`${styles.logout}`}>
                        <MdOutlineLogout />
                        <span>Logout</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Sidebar
