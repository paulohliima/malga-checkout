import { StyledEngineProvider } from "@mui/material/styles";
import { GlobalStyles, Reset, RootVariables } from "@/styles";
import type { AppProps } from "next/app";
import SideBar from "@/components/sideBar";
import Provider from "@/providers";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import ScrollToTopButton from "@/components/scrollToTopButton";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Provider>
          <ToastContainer position="top-center" draggable />
          <Reset />
          <GlobalStyles />
          <RootVariables />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <SideBar />
          <ScrollToTopButton />
        </Provider>
      </StyledEngineProvider>
    </>
  );
}
