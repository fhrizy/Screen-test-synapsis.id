import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../styles/Add.module.scss";

function Add() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();

  /* Submit to add the data  */
  const addData = async () => {
    await axios.post("http://localhost:3000/api/", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    });
    router.push("/?page=1");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Add Data</span>
      </div>
      <div className={styles.add}>
        <form onSubmit={addData}>
          <div className={styles.top}>
            <div className={styles.left}>
              <label>First Name</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                autoFocus
                required
              />
            </div>
            <div className={styles.right}>
              <label>Last Name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={styles.top}>
            <div className={styles.left}>
              <label>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className={styles.right}>
              <label>Phone Number</label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <label>Address</label>
              <textarea
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className={styles.right}>
              <button type="reset" className={styles.reset}>
                Reset
              </button>
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
