import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="m-2 font-bold">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-1 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-1 m-2"
          placeholder="message"
        />
        <button className="border border-black p-1 m-2 bg-gray-400 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
