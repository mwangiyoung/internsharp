import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
function Layout({children}) {
  return (
    <div>
      <Nav/>
      <main className="flex min-h-[100vh] flex-col ">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;