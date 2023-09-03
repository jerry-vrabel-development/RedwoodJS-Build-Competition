import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">

            <h1 className="text-2xl font-semibold text-gray-900">AdminPage</h1>
            <p className="mt-4">
              Find me in <code className="bg-gray-200 p-1 rounded">./web/src/pages/AdminPage/AdminPage.jsx</code>
            </p>
            <p className="mt-4">
              My default route is named <code className="bg-gray-200 p-1 rounded">admin</code>, link to me with `
              <Link to={routes.admin()} className="text-teal-600 underline">Admin</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
