import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { EmojiSymbols } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import logo from "./../../images/logo512.png";
import styles from "./DrawerContent.module.css";

const DrawerContent = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.heading}>
                <div>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt={"Board of Elections Logo"}
                    />
                    <Typography variant={"h6"}>Not signed in</Typography>
                </div>
            </div>
            <List>
                <ListItem button className={styles.menuItem}>
                    <ListItemIcon>
                        <EmojiSymbols />
                    </ListItemIcon>
                    <ListItemText primary={"Catalog"} />
                </ListItem>
            </List>
        </div>
    );
};

export default DrawerContent;
