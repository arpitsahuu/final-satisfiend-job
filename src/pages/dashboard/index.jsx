import Main from "@/components/Dashboard/Main";
import Layout from "@/components/Dashboard/Layout";
import React, { useState } from "react";
import Profile from "../../components/Dashboard/Profile";
import CreateJob from "@/components/Dashboard/CreateJob";
import ViewAllJobs from "@/components/Dashboard/ViewAllJobs";
import EditJobs from "@/components/Dashboard/EditJobs";
import Details from "@/components/Dashboard/Details";
import ViewAllUsers from "@/components/Dashboard/ViewAllUsers";
import ViewAllEmploye from "@/components/Dashboard/ViewAllEmploye";
import AdminViewAllJobs from "@/components/Dashboard/AdminViewAllJobs";

const DashBoard = () => {
  const [tab, setTab] = useState("Main");
  const [id, setId] = useState(null);

  return (
    <div>
      <Layout tab={tab} setTab={setTab}>
        {tab == "Main" && <Main></Main>}
        {tab == "Profile" && <Profile></Profile>}
        {tab == "ViewAllJobs" && (
          <ViewAllJobs setId={setId} setTab={setTab}></ViewAllJobs>
        )}
        {tab == "CreateJob" && <CreateJob></CreateJob>}
        {tab == "Edit" && <EditJobs setTab={setTab} id={id}></EditJobs>}
        {tab == "Details" && <Details setTab={setTab} id={id}></Details>}

        {tab == "AllUsers" && (
          <ViewAllUsers setTab={setTab} id={id}></ViewAllUsers>
        )}

        
        {tab == "AllEmploye" && <ViewAllEmploye setTab={setTab} id={id}></ViewAllEmploye>}
        {tab == "WebsiteJobs" && <AdminViewAllJobs setTab={setTab} id={id}></AdminViewAllJobs>}
      </Layout>
    </div>
  );
};

export default DashBoard;
