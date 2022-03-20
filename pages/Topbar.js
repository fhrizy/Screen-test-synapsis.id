import Image from "next/image";
import Plus from "../public/plus.svg";
import styles from "../styles/Topbar.module.scss";

function Topbar({ cancel, setCancel, setPage }) {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>
          <span>CRUD </span>
          <h3> Synapsis.id</h3>
        </div>
        <div
          className={!cancel ? styles.add : styles.cancel}
          onClick={
            !cancel
              ? () => {
                  setPage("add");
                  setCancel(true);
                }
              : () => {
                  setPage("");
                  setCancel(false);
                }
          }
        >
          <Image className={styles.plus} src={Plus} alt="plus" />
          <span>{!cancel ? "Add new data" : "Cancel"}</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
