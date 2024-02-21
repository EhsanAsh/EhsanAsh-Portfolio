// Desc: This file contains the navbar component for the app.
// It is a child component of the header component.
// ============================================================

// Importing modules
// ============================================================

// ============================================================

// Creating the component
// ============================================================
const Navbar = () => {

    return (

        <div>
            <div>
                <div>
                    <button>
                        {/* <MenuIcon /> */}
                    </button>
                    <h4>
                        <a href="/">
                            About
                        </a>
                    </h4>
                    <button>
                        <a href="/portfolio">
                            Portfolio
                        </a>
                    </button>
                    <button>
                        <a href="/contact">
                            Contact
                        </a>
                    </button>
                    <button>
                        <a href="/resume">
                            Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>

    );
};
// ============================================================

// Exporting the component
// ============================================================
export default Navbar;
// ============================================================