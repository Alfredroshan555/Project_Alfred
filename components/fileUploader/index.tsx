"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

type UploadStatusType = "uploading" | "success" | "started" | "error";
export const FileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatusType>();
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) =>
    e.target.files ? setFile(e.target.files[0]) : null;

  const handleFileUpload = async () => {
    if (!file) return;

    setUploadStatus("uploading");
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          console.log("Progress: ", progressEvent);
          const progress = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0;
          setProgress(progress);
        },
      });
      setProgress(100);
      setUploadStatus("success");
    } catch (error) {
      setUploadStatus("error");
      setProgress(0);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected file: {file?.name}</p>}
      {file && uploadStatus !== "uploading" && (
        <Button onClick={handleFileUpload}>Upload</Button>
      )}
      {uploadStatus === "uploading" && <>Progress {progress}%</>}
      {uploadStatus === "success" && (
        <p className="text-sm text-green-600">File uploaded successfully!</p>
      )}

      {uploadStatus === "error" && (
        <p className="text-sm text-red-600">Upload failed. Please try again.</p>
      )}
    </div>
  );
};
