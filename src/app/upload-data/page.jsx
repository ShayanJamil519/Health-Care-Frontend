import Hero from "@/components/Shared/Hero";
import Form from "@/components/UploadData/Form";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero pageTitle="Upload your health data" />
      <Form />
    </div>
  );
};

export default page;
