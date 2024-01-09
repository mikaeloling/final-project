import AdminDashboard from "../components/AdminDashboard"
import CafeForm from "../components/CafeForm";
import ManageCafes from "../components/ManageCafes";

export const Admin = () => {
  return (
    <div>
        <AdminDashboard />
        <CafeForm />
        <ManageCafes />
    </div>
  )
}


export default Admin