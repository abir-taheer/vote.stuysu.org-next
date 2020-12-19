import React, { useState } from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import styles from "./MenuWrapper.module.css";

const MenuWrapper = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(
    typeof window !== "undefined" && window.innerWidth > 800
  );

  return (
    <div>
      <AppBar setDrawerOpen={setDrawerOpen} />
      <div className={styles.contentRoot}>
        <div className={styles.menuContainer}>
          <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
};

export default MenuWrapper;
