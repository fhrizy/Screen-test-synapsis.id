import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

import Next from "../public/caret-right-fill.svg";
import Previous from "../public/caret-left-fill.svg";
import Edit from "../public/pencil-square.svg";
import Delete from "../public/trash-fill.svg";

import styles from "../styles/Data.module.scss";

export default function Data({
  allData,
  setCancel,
  setPage,
  deleteData,
  setId,
  page,
}) {
  const [count, setCount] = useState();
  const router = useRouter();

  /* Sum all data collection */
  useEffect(() => {
    let mounted = true;

    const axiosData = async () => {
      await axios.get(`http://localhost:3000/api/count`).then((res) => {
        if (mounted) {
          setCount(res.data.data);
        }
      });
    };
    axiosData();

    return () => {
      mounted = false;
    };
  }, []);

  /* to know how much page we have */
  const lastPage = Math.ceil(count / 6);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.overview}>
          <div className={styles.count}>{count}</div>
          <span>Total Data</span>
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => router.push(`/?page=${page - 1}`)}
            disabled={page <= 1}
          >
            <Image className={styles.page} src={Previous} alt="previous" />
          </button>
          <span>
            {page} of {lastPage}
          </span>
          <button
            onClick={() => router.push(`/?page=${page + 1}`)}
            disabled={page >= lastPage}
          >
            <Image className={styles.page} src={Next} alt="next" />
          </button>
        </div>
      </div>
      <div className={styles.data}>
        <ul className={styles.table}>
          <li className={styles.headerTable}>
            <div className={styles.col1}>Name</div>
            <div className={styles.col2}>Email</div>
            <div className={styles.col3}>Phone</div>
            <div className={styles.col4}>Address</div>
            <div className={styles.col5}>Action</div>
          </li>
          {allData
            .sort((a, b) =>
              a.firstName.charAt(0).toLowerCase() >
              b.firstName.charAt(0).toLowerCase()
                ? 1
                : -1
            )
            .map((data, i) => {
              return (
                <li className={styles.row} key={i}>
                  <div className={styles.col1} data-label="Name">
                    {data.firstName} {data.lastName}
                  </div>
                  <div className={styles.col2} data-label="Email">
                    {data.email}
                  </div>
                  <div className={styles.col3} data-label="Phone Number">
                    {data.phone}
                  </div>
                  <div className={styles.col4} data-label="Address">
                    {data.address}
                  </div>
                  <div className={styles.col5} data-label="Action">
                    <Image
                      className={styles.edit}
                      src={Edit}
                      alt="edit"
                      onClick={() => {
                        setPage("edit");
                        setCancel(true);
                        setId(data._id);
                      }}
                    />
                    <Image
                      className={styles.delete}
                      src={Delete}
                      alt="delete"
                      onClick={() => {
                        deleteData(data._id);
                      }}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
