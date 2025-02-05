import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          {[
            { path: "/", text: "Ana Sayfa" },
            { path: "/about", text: "Hakkımda" },
            { path: "/certificates", text: "Sertifikalar" },
            { path: "/github-repos", text: "GitHub Projeler" }
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-white font-medium px-4 py-2 rounded-lg transition-all duration-300
                  ${location.pathname === item.path 
                    ? "bg-white/20 shadow-md" 
                    : "hover:bg-white/10"}`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
