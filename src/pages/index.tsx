import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/listings",
      permanent: true,
    },
  };
};

export default function Home() {
  return null;
}