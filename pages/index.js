import KeranjangBelanja from "@/components/KeranjangBelanja";
import Card from "@/components/KeranjangBelanja";
import Layout from "@/components/Layout";
import Produk from "@/components/Produk";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>TOKO ONLINE</title>
      </Head>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mt-4">
              <KeranjangBelanja />
            </div>
            <div className="col-sm-8">
              <Produk produk={data} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const data = await res.json();
  return {
    props: { data },
  };
}
