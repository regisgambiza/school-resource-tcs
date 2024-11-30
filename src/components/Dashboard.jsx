import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    // Dummy data for the right column
    const bookedServices = [
        { id: 1, service: "Library", date: "2024-12-01 10:00 AM" },
        { id: 2, service: "Mobile Laptops", date: "2024-12-01 11:30 AM" },
    ];

    const pendingDocuments = [
        { id: 1, document: "Math Homework", status: "Pending" },
        { id: 2, document: "Science Project", status: "Pending" },
    ];

    return (
        <div className="dashboard">
            <div className="left-column">
                <h1>Welcome to Your Dashboard</h1>
                <p>Here you can manage your resource bookings.</p>

                <div className="resources">
                    <div className="resource-item">
                        <h2>Library</h2>
                        <p>Book a slot in the library</p>
                        <Link to="/book-library" className="btn">Book Now</Link>
                    </div>
                    <div className="resource-item">
                        <h2>Media Center</h2>
                        <p>Book a slot in the media center</p>
                        <Link to="/book-media-center" className="btn">Book Now</Link>
                    </div>
                    <div className="resource-item">
                        <h2>Mobile Laptops</h2>
                        <p>Reserve mobile laptops for use</p>
                        <Link to="/book-laptops" className="btn">Reserve Now</Link>
                    </div>
                    <div className="resource-item">
                        <h2>Computer Room</h2>
                        <p>Book a time slot in the computer room</p>
                        <Link to="/book-computer-room" className="btn">Book Now</Link>
                    </div>
                    <div className="resource-item">
                        <h2>Print Documents</h2>
                        <p>Submit documents for printing</p>
                        <Link to="/submit-print" className="btn">Submit Now</Link>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
                <h2>Current Bookings</h2>
                <ul className="bookings-list">
                    {bookedServices.map((service) => (
                        <li key={service.id}>
                            <strong>{service.service}</strong> - {service.date}
                        </li>
                    ))}
                </ul>

                <h2>Pending Print Jobs</h2>
                <ul className="print-jobs-list">
                    {pendingDocuments.map((doc) => (
                        <li key={doc.id}>
                            <strong>{doc.document}</strong> - {doc.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
