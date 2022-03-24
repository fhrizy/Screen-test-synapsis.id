import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "../styles/Edit.module.scss";

export default function Edit({ Id }) {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();

  /* Geting data from id selected */
  useEffect(() => {
    let mounted = true;

    const axiosData = async () => {
      await axios.get(`http://localhost:3000/api/${Id}`).then((res) => {
        if (mounted) {
          setUserId(res.data.data._id);
          setFirstName(res.data.data.firstName);
          setLastName(res.data.data.lastName);
          setEmail(res.data.data.email);
          setPhone(res.data.data.phone);
          setAddress(res.data.data.address);
        }
      });
    };
    axiosData();

    return () => {
      mounted = false;
    };
  }, [Id]);

  /* Submit the changing of the data */
  const editData = async () => {
    await axios
      .put(`http://localhost:3000/api/${userId}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
      })
      .then((res) => {
        console.log(res.data);
      });
    router.push("/?page=1");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Edit Data</span>
      </div>
      <div className={styles.edit}>
        <form onSubmit={editData}>
          <div className={styles.top}>
            <div className={styles.left}>
              <label>First Name</label>
              <input
                value={firstName}
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
                value={lastName}
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className={styles.right}>
              <label>Phone Number</label>
              <input
                value={phone}
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
                value={address}
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
