import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"; // Import styled-components
import Header from "./Header";

const EmailList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  width: 90%; /* Set initial width to 100% */
  max-width: 600px; /* Set maximum width */
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const EmailText = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

const Admin = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios
      .get("https://full-mernauth.onrender.com/admin/api")
      .then((response) => {
        setEmails(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDeleteEmail = async (emailAddress) => {
    try {
      console.log("Deleting email:", emailAddress);

      // Send the email address in the request body as an object
      const response = await axios.post("https://full-mernauth.onrender.com/admin/email/delete", { email: emailAddress });

      console.log("Response from server:", response.data);

      if (response.data === "User deleted successfully") {
        // Remove the deleted email from the state
        setEmails(emails.filter((email) => email.email !== emailAddress));
        alert("Email is deleted");
      } else {
        alert("Email could not be deleted");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the email");
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Admin portal</h1>
      </div>
      <div>
        <EmailList>
          {emails.map((email) => (
            <EmailItem key={email._id}>
              <EmailText>Email: {email.email}</EmailText>
              <DeleteButton onClick={() => handleDeleteEmail(email.email)}>
                Delete
              </DeleteButton>
            </EmailItem>
          ))}
        </EmailList>
      </div>
    </>
  );
};

export default Admin;
