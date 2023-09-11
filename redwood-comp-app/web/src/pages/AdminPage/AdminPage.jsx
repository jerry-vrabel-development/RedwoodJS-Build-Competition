import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import UsersCell from 'src/components/User/UsersCell'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />
      <div className="min-h-screen bg-blue-100 p-6">
        <UsersCell />
      </div>
    </>
  );
};

export default AdminPage;
