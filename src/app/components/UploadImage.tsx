"use client";

import { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import Image from "next/image";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleUploadImage = (e: any) => {
    const formData = new FormData();
    setSelectedImage(e.target.files[0]);
    const maxSize = 1024 * 1024;

    if (e.target.files[0].size < maxSize) {
      setErrorMessage(null);
      setSelectedImage(e.target.files[0]);
      formData.append("file", e.target.files[0].name);
      console.log(formData.get("file"));
    } else {
      setErrorMessage(null);
      setErrorMessage("File size must be less than 1MB");
    }
  };

  const removeSelectedImage = () => {
    setErrorMessage(null);
    setSelectedImage(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <FormContainer title="upload cover image">
        <>
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            {selectedImage ? (
              <div className="w-full relative h-80">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  className="rounded w-full object-cover"
                  alt="Thumb"
                  fill
                />
              </div>
            ) : (
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center w-full max-w-lg p-10  mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl "
              >
                <div className="flex flex-col items-center justify-center ">
                  <svg
                    className="w-8 h-8 mb-4 text-primary-white "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-center text-primary-white font-black">
                    Upload cover image
                  </p>
                  <p className="text-xs text-center text-primary-white ">
                    16:9 ratio is recommended. Max image size 1mb
                  </p>
                </div>
              </label>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/gif, image/jpeg, image/png"
              onChange={handleUploadImage}
            />
          </div>

          {errorMessage ? (
            <div className="mt-2  w-full w-full  bg-red-400 rounded-lg shadow-md ">
              <p className="text-sm text-white px-4 py-2">{errorMessage}</p>
            </div>
          ) : null}
          
          {selectedImage ? (
            <button
              onClick={removeSelectedImage}
              className="self-start flex items-center  text-sm font-bold text-[#A80000] "
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.7863 14.206L14.3 10.6488L15.3136 11.6499L31.2215 27.3648L27.7076 30.9219L10.7863 14.206Z"
                  fill="#A80000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.7529 11.3472L30.3072 14.8638L29.3053 15.8766L21.9329 23.3271L14.1448 31.1152L10.6092 27.5797L18.3926 19.7963L26.7529 11.3472Z"
                  fill="#A80000"
                />
              </svg>

              <span>Delete & re-upload</span>
            </button>
          ) : null}
        </>
      </FormContainer>
    </div>
  );
};

export default UploadImage;
