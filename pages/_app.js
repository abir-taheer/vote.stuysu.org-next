import "../styles/globals.css";
import { StylesProvider } from "@material-ui/core/styles";
import MenuWrapper from "../comps/menu/MenuWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StylesProvider injectFirst>
        <MenuWrapper>
          <Component {...pageProps} />
        </MenuWrapper>
      </StylesProvider>
    </>
  );
}

export default MyApp;
