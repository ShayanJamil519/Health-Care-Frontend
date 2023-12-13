import Form from "@/components/UploadData/Form";
import Hero from "@/components/shared/Hero";
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
