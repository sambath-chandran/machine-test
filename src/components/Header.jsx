import React, { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const containerRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <h2>Countries</h2>
          <nav>
            <ul className="nav-list">
              <li>
                <a className="active" href="/">
                  All
                </a>
              </li>
              <li>
                <a href="/">Asia</a>
              </li>
              <li>
                <a href="/">Europe</a>
              </li>
            </ul>
          </nav>
          <div className="resp_nav">
            <Hamburger
              onToggle={() => setShowMenu(!showMenu)}
              toggled={showMenu}
            />
            {showMenu && (
              <ul
                className="mob_nav_list animate__animated animate__fadeIn"
                ref={containerRef}
              >
                <li>
                  <a className="active" href="/">
                    All
                  </a>
                </li>
                <li>
                  <a href="/">Asia</a>
                </li>
                <li>
                  <a href="/">Europe</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
