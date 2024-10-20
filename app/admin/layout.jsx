import Navbar from "@/Components/AdminComponents/Navbar/navbar";
import AdminSidebar from "@/Components/AdminComponents/Sidebar/sidebar";

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar />
            <AdminSidebar />
            {children}
        </div>
    );
}