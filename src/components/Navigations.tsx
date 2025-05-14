import { NavLink } from "react-router-dom";

const Navigations = () => {
  const navLinkStyle =
    "text-lg text-gray-600 hover:text-blue-600 px-2 py-1 transition-colors";

  const activeStyle = "font-bold text-blue-600";

  return (
    <nav className="mt-2 flex justify-center space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
        }
        end
      >
        Projects
      </NavLink>

      <NavLink
        to="/certifications"
        className={({ isActive }) =>
          isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
        }
        end
      >
        Certifications
      </NavLink>
      <NavLink
        to="/contact-me"
        className={({ isActive }) =>
          isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
        }
        end
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigations;
