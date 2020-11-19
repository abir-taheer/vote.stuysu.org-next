import "../styles/globals.css";
import AppBar from "../comps/menu/AppBar";
import { StylesProvider } from "@material-ui/core/styles";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<StylesProvider injectFirst>
				<AppBar />
				<Component {...pageProps} />
			</StylesProvider>
		</>
	);
}

export default MyApp;
