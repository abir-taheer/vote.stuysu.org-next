import React from "react";
import DrawerContent from "./DrawerContent";
import { useMediaQuery } from "@material-ui/core";
import MaterialDrawer from "@material-ui/core/Drawer";

const Drawer = ({ open, setOpen }) => {
	const isMobile = useMediaQuery("(max-width: 800px)");

	if (isMobile) {
		return (
			<MaterialDrawer
				anchor={"left"}
				open={open}
				onClose={() => setOpen(false)}
			>
				<DrawerContent />
			</MaterialDrawer>
		);
	}

	return (
		<div>
			<DrawerContent />
		</div>
	);
};

export default Drawer;
