"use client"
import TCNavbar from "../../Components/teachercomponent/tcnavbar/tcNavbar";
import TCSidebar from "../../Components/teachercomponent/tcsidebar/tcSidebar";
import Footer from "../../Components/Footer/footer"

export default function RootLayout({ children }) {
    return (
        <div>
            <TCNavbar />
            <TCSidebar />
            {children}
            <Footer />
        </div>
    );
}