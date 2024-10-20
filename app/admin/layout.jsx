"use client"
import Navbar from "../../Components/AdminComponents/Navbar/navbar";
import AdminSidebar from "../../Components/AdminComponents/Sidebar/sidebar";
import Footer from "../../Components/Footer/footer"

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar />
            <AdminSidebar />
            {children}
            <Footer />
        </div>
    );
}