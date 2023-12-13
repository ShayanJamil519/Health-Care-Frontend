import Form from "@/components/UploadData/Form";
import Hero from "@/components/shared/Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero pageTitle="Upload your health data" />
      <Form />
    </div>
  );
}
