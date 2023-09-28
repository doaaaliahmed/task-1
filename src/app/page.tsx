"use client";
import UploadImage from "./components/UploadImage";
import PersonalInformation from "./components/PersonalInformation";
import Profile from "./components/Profile";
import { useState } from "react";
import AdditionalQuestion from "./components/AdditionalQuestions";
import { IPersonalInfo } from "@/core/interfaces/user.interface";

export default function Home() {
  const [addPersonalQuestion, setAddPersonalQuestion] = useState(false);
  const [addProfileQuestion, setAddProfileQuestion] = useState(false);

  const openPersonalQuestion = (open: boolean) => setAddPersonalQuestion(open);
  const openProfileQuestion = (open: boolean) => setAddProfileQuestion(open);

  const getPersonalInformation=(personalData : IPersonalInfo)=>{
    console.log(personalData)
  }

  const getProfileInformation=(profileData : IPersonalInfo)=>{
    console.log(profileData)
  }

  



  return (
    <div  className="w-full flex flex-col items-center justify-center gap-10 py-10">
      <UploadImage />
      <PersonalInformation openPersonalQuestion={openPersonalQuestion}  onAddPersonalData={getPersonalInformation}/>
      {addPersonalQuestion && <AdditionalQuestion />}
      <Profile openProfileQuestion={openProfileQuestion}  onAddProfileData={getProfileInformation}/>
      {addProfileQuestion && <AdditionalQuestion />}
    </div>
  );
}
