import AdminDashboard from "../components/AdminDashboard"
import CafeForm from "../components/CafeForm";
// import ManageCafes from "../components/ManageCafes";
import NavBar from "../components/NavBar";

export const Admin = () => {
  return (
    <div>
        <NavBar />
        <AdminDashboard />
        <CafeForm />
        {/* <ManageCafes /> */}
    </div>
  )
}


export default Admin