import { useState } from "react";

function Navbar() {
    return (
        <div className="mb-10 bg-neutral p-4">
            <div className="navbar">
                <div className="navbar-start">
                    <h1 className="btn animate-pulse text-xl">Weather app</h1>
                </div>
                <div className="navbar-end text-white">
                    <h1 className="btn">Developed by MiMeiner, FrontFelix & PRimate</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar;