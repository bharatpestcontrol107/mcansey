'use client';

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    lastCompany: "",
    lastCTC: "",
    expectedCTC: "",
    relocate: "",
    comments: "",
  });

  // State for file upload (disabled in the current form)
  const [file, setFile] = useState<File | null>(null);

  // Handle changes for input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change (disabled in the current form)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Validate form data before submitting
  const validateForm = () => {
    const { firstName, lastName, email, phone, position } = formData;
    if (!firstName || !lastName || !email || !phone || !position) {
      toast.error("Please fill in all required fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    // Prepare data to send to the server as JSON
    const formDataToSend = { ...formData };
    
    try {
      const response = await fetch("/api/job-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server responded with an error:", errorData);
        toast.error(errorData.message || "Form submission failed");
      } else {
        toast.success("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          lastCompany: "",
          lastCTC: "",
          expectedCTC: "",
          relocate: "",
          comments: "",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("An error occurred while submitting the form");
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-4 mb-4">
      <ToastContainer />
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Apply for Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <input
          type="text"
          name="position"
          placeholder="Position Applied For"
          value={formData.position}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="experience"
          placeholder="Total Experience"
          value={formData.experience}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastCompany"
          placeholder="Last Company"
          value={formData.lastCompany}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastCTC"
          placeholder="Last CTC"
          value={formData.lastCTC}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="expectedCTC"
          placeholder="Expected CTC"
          value={formData.expectedCTC}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="relocate"
          placeholder="Willing to Relocate? (Yes/No)"
          value={formData.relocate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="comments"
          placeholder="Any comments"
          value={formData.comments}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        
        {/* Disable the file input for now */}
        {/* <input type="file" onChange={handleFileChange} className="border p-2 w-full" /> */}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
