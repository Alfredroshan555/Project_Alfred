"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files ? setFile(e.target.files[0]) : null;
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progress) => {
          console.log(progress);
        },
      });
      console.log("uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
      <Button onClick={handleFileUpload}>Upload</Button>
    </div>
  );
};
