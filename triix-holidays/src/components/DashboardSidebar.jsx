import { Link, useLocation } from "react-router-dom";

import {
    LayoutDashboard,
    CalendarCheck,
    Heart,
    Map,
    User,
    LogOut
} from "lucide-react";

import "./DashboardSidebar.css";
import { useNavigate } from "react-router-dom";
import { logoutDemo } from "../utils/auth";

function DashboardSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutDemo();
        navigate("/", { replace: true });
    };

    const location = useLocation();

    const menuItems = [
        {
            name: "Overview",
            icon: LayoutDashboard,
            path: "/dashboard"
        },
        {
            name: "My Bookings",
            icon: CalendarCheck,
            path: "/dashboard/bookings"
        },
        {
            name: "Wishlist",
            icon: Heart,
            path: "/wishlist"
        },
        {
            name: "Trip Planner",
            icon: Map,
            path: "/trip-planner"
        }
    ];

    return (
        <aside className="dashboard-sidebar">

            <div className="dashboard-user">

                <div className="dashboard-avatar">
                    AP
                </div>

                <div>
                    <h3>Abhinav P</h3>
                    <p>Traveller Account</p>
                </div>

            </div>


            <div className="dashboard-menu">

                <span className="dashboard-menu-title">
                    MENU
                </span>

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    const active =
                        location.pathname === item.path;

                    return (

                        <Link
                            to={item.path}
                            key={item.name}
                            title={item.name}
                            aria-current={active ? "page" : undefined}
                            className={`dashboard-menu-link ${active ? "active" : ""
                                }`}
                        >

                            <Icon size={19} />

                            <span>{item.name}</span>

                        </Link>

                    );

                })}

            </div>


            <div className="dashboard-sidebar-bottom">

                <Link to="/profile" className="dashboard-menu-link">
                    <User size={19} />
                    <span>My Profile</span>
                </Link>

                <Link to="/" className="dashboard-menu-link">
                    <LogOut size={19} />
                    <span>Back to Home</span>
                </Link>
                <button
                    className="sidebar-logout"
                    onClick={handleLogout}
                >
                    <LogOut size={18} />
                    Logout
                </button>

            </div>

        </aside>
    );
}

export default DashboardSidebar;
