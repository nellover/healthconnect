import { useState } from "react";
import {
  Pencil,
  LayoutGrid,
  Calendar,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom"; // Correct import for react-router-dom
import "../Dashboard/dashboard.css";

const appointments = [
  {
    id: "1",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "View",
    status: "Pending",
  },
  {
    id: "2",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "Not Added",
    status: "Pending",
  },
  {
    id: "3",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "View",
    status: "Approved",
  },
  {
    id: "4",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "View",
    status: "Pending",
  },
  {
    id: "5",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "Not Added",
    status: "Cancelled",
  },
  {
    id: "6",
    date: "27-02-2020",
    time: "3:00 PM",
    name: "Karim Ahmed",
    contact: "+0170000000",
    prescription: "View",
    status: "Pending",
  },
];

function Layout({ children }) {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <nav className="nav">
          <NavItem icon={<LayoutGrid />} to="/dashboard" label="Dashboard" />
          <NavItem icon={<Calendar />} to="/appointments" label="Appointment" />
          <NavItem icon={<Users />} to="/patients" label="Patients" />
          <NavItem
            icon={<FileText />}
            to="/prescriptions"
            label="Prescriptions"
          />
          <NavItem icon={<Settings />} to="/settings" label="Setting" />
          <NavItem icon={<LogOut />} to="/logout" label="Log Out" />
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}

function NavItem({ icon, to, label }) {
  return (
    <Link to={to} className="nav-item">
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function StatsCard({ count, label, subLabel, className = "" }) {
  return (
    <div className={`stats-card ${className}`}>
      <div className="stats-count">{count}</div>
      <div className="stats-label">{label}</div>
      <div className="stats-sub-label">{subLabel}</div>
    </div>
  );
}

function AppointmentsTable({ appointments }) {
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h2>Recent Appointments</h2>
        <select className="appointments-filter">
          <option>Week</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>
      <div className="appointments-table-wrapper">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Prescription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{String(index + 1).padStart(2, "0")}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.name}</td>
                <td>{appointment.contact}</td>
                <td>
                  {appointment.prescription === "Not Added" ? (
                    <span className="text-gray">Not Added</span>
                  ) : (
                    <button className="btn-view">View</button>
                  )}
                </td>
                <td>
                  <div className="status-actions">
                    <span
                      className={`status ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                    <button className="edit-btn">
                      <Pencil className="icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="stats-grid">
        <StatsCard
          count="09"
          label="Pending"
          subLabel="Appointments"
          className="bg-red"
        />
        <StatsCard
          count="19"
          label="Today's"
          subLabel="Appointments"
          className="bg-blue"
        />
        <StatsCard
          count="34"
          label="Total"
          subLabel="Appointments"
          className="bg-green"
        />
        <StatsCard
          count="78"
          label="Total"
          subLabel="Patients"
          className="bg-orange"
        />
      </div>
      <AppointmentsTable appointments={appointments} />
    </Layout>
  );
}
