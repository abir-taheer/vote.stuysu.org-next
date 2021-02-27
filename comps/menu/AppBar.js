import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Menu as MenuIcon } from "@material-ui/icons";
import styles from "./AppBar.module.css";
import TopAppBar from "@material-ui/core/AppBar";
import useHasScrolled from "../../hooks/useHasScrolled";

function AppBar({ setDrawerOpen }) {
    const hasScrolled = useHasScrolled();

    return (
        <TopAppBar
            position="fixed"
            className={styles.appBar}
            elevation={hasScrolled ? 4 : 0}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setDrawerOpen(current => !current)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles.title}>
                    Board of Elections
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </TopAppBar>
    );
}
export default AppBar;
