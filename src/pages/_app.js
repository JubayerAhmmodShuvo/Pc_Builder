import { PCBuilderProvider } from "@/components/contexts/PCBuilderContext";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/UI/Footer";

export default function App({ Component, pageProps }) {
  return (
    <PCBuilderProvider>
      <SessionProvider session={pageProps.session}>
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      </SessionProvider>
    </PCBuilderProvider>
  );
}
