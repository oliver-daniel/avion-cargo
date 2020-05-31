import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Page = ({ children, className = "", ...props }) => (
  <div className={"Page " + className} {...props}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Page;
