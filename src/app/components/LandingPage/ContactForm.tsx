"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  projectType: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    plan: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }));
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const validateForm = (): boolean => {
    const { fullName, email, phone, plan, projectType, message } = formData;

    if (!fullName || !email || !phone || !plan || !projectType || !message) {
      toast.error("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/promotional-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", plan: "", projectType: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={`p-6 sm:p-10 `}
      id="about-us"
      style={{ fontFamily: "Clash Grotesk", fontWeight: "400" }}
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Input
            id="fullName"
            placeholder="Full Name"
            className="h-12"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="h-12"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            className="h-12"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Select onValueChange={handleProjectTypeChange}>
            <SelectTrigger className="h-12">
              <SelectValue
                placeholder={formData.projectType || "Select Project Type"}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Select onValueChange={handlePlanChange}>
            <SelectTrigger className="h-12">
              <SelectValue
                placeholder={formData.plan || "Select suitable Plan"}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Plan</SelectItem>
              <SelectItem value="pro">Pro Plan</SelectItem>
              <SelectItem value="enterprise">Enterprise Plan</SelectItem>
              <SelectItem value="other">Other Plans</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-6">
        <Textarea
          id="message"
          placeholder="Message"
          className="min-h-[150px] resize-none"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-6 flex justify-end">
        <Button
          type="submit"
          className="bg-rose-600 px-8 hover:bg-rose-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
