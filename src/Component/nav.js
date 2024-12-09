import React from "react";
import '../App.css';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: 3,  // Example cart items count
            searchQuery: '',  // Search bar value
        };
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    render() {
        const { cartItems, searchQuery } = this.state;
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'pink' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Zotravo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hostels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        {/* Centered Search Bar */}
                        <div className="search-container d-flex justify-content-center flex-grow-1">
                            <form className="d-flex w-50">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={this.handleSearchChange}
                                />
                            </form>
                        </div>

                        {/* Cart and Profile Section */}
                        <div className="d-flex align-items-center">
                            {/* Cart Icon and ID */}
                            <button className="btn btn-outline-dark me-3">
                                <i className="bi bi-cart"></i> Cart ({cartItems})
                            </button>

                            {/* User Profile */}
                            <div className="user-profile d-flex align-items-center">
                                <img
                                    src="https://via.placeholder.com/40"  // Replace with actual user's profile picture URL
                                    alt="User"
                                    className="rounded-circle"
                                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                                />
                                <span className="user-name">John Doe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
