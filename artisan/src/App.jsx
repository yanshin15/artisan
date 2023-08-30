import { useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import CTALayout from "./components/CTALayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Navbar />
        <CTALayout />
      </Layout>
    </>
  );
}

export default App;
