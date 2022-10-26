import "./contact.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <input
            {...register("firstName", { required: true })}
            placeholder="First name"
          />
          <input
            {...register("lastName", { required: true })}
            placeholder="Last name"
          />
          <textarea {...register("aboutYou")} placeholder="About you" />
          <p>{data}</p>
          <input type="submit" value={"Send"}/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
