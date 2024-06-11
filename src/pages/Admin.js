import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button } from "antd";

const Admin = () => {
  return (
    <div>
      <PageHeader
        title="Admin Panel"
        extra={[
          <Link to="/categories" key="1">
            <Button type="primary">Manage Categories</Button>
          </Link>,
        ]}
          />
          
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          Welcome to the Admin Panel
</div>


    </div>
  );
};
export default Admin;