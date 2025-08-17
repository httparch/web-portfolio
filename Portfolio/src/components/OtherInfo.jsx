import { useState } from "react";
import InfoCard from "./InfoCard";
import { _key } from "./data/data.js";
import { _PostMessage } from "./data/api-controller.js";

function OtherInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const dataForm = new FormData(e.target);
    dataForm.append("access_key", _key);

    const response = await _PostMessage(dataForm);
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      setFormData({ name: "", email: "", message: "" });
      setResult("");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <InfoCard />
      <div className="bg-white rounded-lg p-3">
        <h3 className="text-sm font-bold text-center">
          {result !== "" ? "Sending..." : "Message me!"}
        </h3>
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
