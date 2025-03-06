import { useState } from "react";
import InfoCard from "./InfoCard";
function OtherInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <InfoCard />
      <div className="bg-white rounded-lg p-3">
        <h3 className="text-sm font-bold text-center">Message me!</h3>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-2"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-1 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default OtherInfo;
