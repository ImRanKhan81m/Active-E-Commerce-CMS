import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "regenerator-runtime/runtime";
import CreateContext from "../src/Components/CreateContex";
import Layout from "../src/Components/Layout";
import "react-quill/dist/quill.snow.css";
import "../styles/globals.css";
import { Provider } from 'react-redux';
import store from "../src/features/app/store";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  const value = {
    setUser,
    setToken,
  };



  return (
    <>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <CreateContext.Provider value={value}>
          <Layout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </CreateContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
