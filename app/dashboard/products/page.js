import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import { GoEye } from "react-icons/go";

import Pagination from "@/app/ui/pagination/Pagination";
import styles from "@/app/ui/product/product.module.css";
import Search from "@/app/ui/search/Search";
import Button from "@/app/ui/user/Button";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <Search placeholder="Search products..." />
        <Button />
      </div>
      <table className={styles.table}>
        <thead className={styles.tableheading}>
          <tr>
            <th>Title</th>
            <th>Descripation</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tablebody}>
          <tr>
            <td>
              <div className={styles.product_iname}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span className={styles.productTitle}>Redmi</span>
              </div>
            </td>
            <td>
              <span>Lorem</span>
            </td>
            <td>$200</td>
            <td>1 day</td>
            <td>12</td>
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
  );
};

export default ProductPage;
