import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Page = ({ children, ...props }) => (
  <div className="Page" {...props}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Page;
