const Certifications = () => {
  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-2">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow-sm">
          <img
            src="/certs/reactjs.jpg"
            alt="ReactJS"
            className="rounded mb-2"
          />
          <h3 className="text-sm font-medium">
            React - The Complete Guide 2025
          </h3>
          <p className="text-xs text-gray-500">Udemy - Feb 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
