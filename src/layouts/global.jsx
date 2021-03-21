import Footer from "../components/footer";

const Global = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Global;
