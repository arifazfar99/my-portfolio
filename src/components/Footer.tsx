const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-12">
      <p>
        © {new Date().getFullYear()} Arif Azfar Azri . {" "}
        <a
          href="https://github.com/arifazfar99"
          className="text-blue-600"
          target="_blank"
        >
          GitHub
        </a>{" "}
        .
        <a
          href="https://www.linkedin.com/in/arif-azfar-azri/"
          className="text-blue-600 ml-1"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
