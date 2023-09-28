"use client"
import { FC, useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import AddQuestion from "./UI/AddQuestion";
import InputFeield from "./UI/InputFeield";


type IProps = {
  openProfileQuestion : any;
  onAddProfileData:any;
}


const Profile:FC<IProps>= ({openProfileQuestion , onAddProfileData})=> {
  //Education
const [educationMandatory , setEducationMandatory] = useState<boolean>(false);
const [educationShaw , setEducationShaw] = useState<boolean>(false);

//Exeperince
const [exeperinceMandatory , setExeperinceMandatory] = useState<boolean>(false);
const [exeperinceShaw , setExeperinceShaw] = useState<boolean>(false);

//Resume
const [resumeMandatory , setResumeMandatory] = useState<boolean>(false);
const [resumeShaw , setResumeShaw] = useState<boolean>(false);

const profileInfoData = {
  education:  { internalUse: educationMandatory, show: educationShaw},
  experience:  { internalUse: exeperinceMandatory, show: exeperinceShaw},
  resume:  { internalUse: resumeMandatory, show: resumeShaw},
  // profileQuestions:
}


useEffect(()=>{
  
  onAddProfileData(profileInfoData);

},[])


  return (
 
    <FormContainer title="profile">
      <>
        <div className="flex flex-col item-center justify-start w-full">
          <InputFeield
            inputName="Mandatory"
            title="Education"
            show={educationShaw}
            
            internalHandlerFunc={(e: any) => setEducationMandatory(e.target.checked)}
            showHandlerFunc={(e: any) => setEducationShaw(e.target.checked)}
          />
          <InputFeield
            inputName="Mandatory"
            title="Exeperince"
            show={exeperinceShaw}
            internalHandlerFunc={(e: any) => setExeperinceMandatory(e.target.checked)}
            showHandlerFunc={(e: any) => setExeperinceShaw(e.target.checked)}
          />
          <InputFeield
            inputName="Mandatory"
            title="Resume"
            show={resumeShaw}
            internalHandlerFunc={(e: any) => setResumeMandatory(e.target.checked)}
            showHandlerFunc={(e: any) => setResumeShaw(e.target.checked)}
          />
        </div>
        <AddQuestion  addQuestionHandler={()=> openProfileQuestion(true)} />
      </>
    </FormContainer>

  );
};
export default Profile;
