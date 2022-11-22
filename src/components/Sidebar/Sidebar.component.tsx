import React from "react";
import User from "../User/User.component";
import styles from "./sidebar.module.css"

import userData from "~/data/userData.json"
import { Form } from "../index";

const Sidebar = () => {

    const handleLogout = () => {
        console.log("logout")
    }

    return (
        <div className={styles.root}>
            <div className={styles.top}>
             <User name={userData.name} email={userData.email} image={userData.url} logout={handleLogout}  />
            </div>

            <div className={styles.center}>
             <Form />
            </div>
        </div>
    )
}

export default Sidebar;
