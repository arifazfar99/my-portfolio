const Projects = () => {
  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ul className="space-y-4">
        <li>
          <strong>Track My Gaji (April 2025)</strong>
          <a
            href="https://track-my-gaji.vercel.app/"
            className="text-blue-600"
            target="_blank"
          >
            {" "}Link
          </a>
          <br />• Developed a React.js web application to calculate net salary
          after Malaysian statutory deductions (EPF, SOCSO, EIS)
          <br />• Allows users to track their monthly commitments (e.g., loans,
          bills, subscriptions), calculate the total commitment amount, and view
          the balance remaining after expenses
          <br />• React + TypeScript + Tailwind CSS, GitHub, hosted on Vercel
        </li>
      </ul>
    </section>
  );
};

export default Projects;
