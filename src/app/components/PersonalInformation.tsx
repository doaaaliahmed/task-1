"use client"
import { FC, useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import AddQuestion from "./UI/AddQuestion";
import InputFeield from "./UI/InputFeield";
import { IPersonalInfo } from "@/core/interfaces/user.interface";


type IProps={
  openPersonalQuestion : any;
  onAddPersonalData : any;
}

const PersonalInformation:FC<IProps>= ({openPersonalQuestion , onAddPersonalData}) => {
  // firstName
  const [fNameInternal , setFNameInternal] = useState<boolean>(false);
  const [fNameShaw , setFNameShaw] = useState<boolean>(false);

//lastName
  const [lNameInternal , setLNameInternal] = useState<boolean>(false);
  const [lNameShaw , setLNameShaw] = useState<boolean>(false);

//email
const [emailInternal , setEmailInternal] = useState<boolean>(false);
const [emailShaw , setEmailShaw] = useState<boolean>(false);

//phone
const [phoneInternal , setPhoneInternal] = useState<boolean>(false);
const [phoneShaw , setPhoneShaw] = useState<boolean>(false);

//Nationality
const [nationalityInternal , setNationalityInternal] = useState<boolean>(false);
const [nationalityShaw , setNationalityShaw] = useState<boolean>(false);

//CurrentResidence
const [currentResidenceInternal , setCurrentResidenceInternal] = useState<boolean>(false);
const [currentResidenceShaw , setCurrentResidenceShaw] = useState<boolean>(false);

//Id
const [idInternal , setIdInternal] = useState<boolean>(false);
const [idShaw , setIdShaw] = useState<boolean>(false);

//DateOfBirth
const [dateOfBirthInternal , setDateOfBirthInternal] = useState<boolean>(false);
const [dateOfBirthShaw , setDateOfBirthShaw] = useState<boolean>(false);

//Gender
const [genderInternal , setGenderInternal] = useState<boolean>(false);
const [genderShaw , setGenderShaw] = useState<boolean>(false);



const personalInfoData = {
  firstName:  { internalUse: fNameInternal, show: fNameShaw},
  lastName:  { internalUse: lNameInternal, show: lNameShaw},
  emailId:  { internalUse: emailInternal, show: emailShaw},
  phoneNumber:  { internalUse: phoneInternal, show: phoneShaw},
  nationality:  { internalUse: nationalityInternal, show: nationalityShaw},
  currentResidence:  { internalUse: currentResidenceInternal, show: currentResidenceShaw},
  idNumber:  { internalUse: idInternal, show: idShaw},
  dateOfBirth:  { internalUse: dateOfBirthInternal, show: dateOfBirthShaw},
  gender:  { internalUse: genderInternal, show: genderShaw},
  // personalQuestions:  
}


useEffect(()=>{
  
  onAddPersonalData(personalInfoData);

},[])





  return (
    <FormContainer title="personal information">
      <>
        <div className="flex flex-col item-center justify-start w-full">
          <InputFeield
          inputName='Intrnal'
            title="First Name"
            show={fNameShaw}
            internalHandlerFunc={(e: any) => setFNameInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setFNameShaw(e.target.checked)}
          />

          <InputFeield
          inputName='Intrnal'
            title="Last Name"
            show={lNameShaw}
            internalHandlerFunc={(e: any) => setLNameInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setLNameShaw(e.target.checked)}
          />

          <InputFeield
          inputName='Intrnal'
            title="email"
            show={emailShaw}
            internalHandlerFunc={(e: any) => setEmailInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setEmailShaw(e.target.checked)}
          />
          <InputFeield
          inputName='Intrnal'
            title="Phone(without dial code)"
            show={phoneShaw}
            internalHandlerFunc={(e: any) => setPhoneInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setPhoneShaw(e.target.checked)}
          />
          <InputFeield
          inputName='Intrnal'
            title="Nationality"
            show={nationalityShaw}
            internalHandlerFunc={(e: any) => setNationalityInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setNationalityShaw(e.target.checked)}
          />

          <InputFeield
          inputName='Intrnal'
            title="Current Residence"
            show={currentResidenceShaw}
            internalHandlerFunc={(e: any) => setCurrentResidenceInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setCurrentResidenceShaw(e.target.checked)}
          />
          <InputFeield
          inputName='Intrnal'
            title="ID Number"
            show={idShaw}
            internalHandlerFunc={(e: any) => setIdInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setIdShaw(e.target.checked)}
          />
          <InputFeield
          inputName='Intrnal'
            title="Date of Birth"
            show={dateOfBirthShaw}
            internalHandlerFunc={(e: any) => setDateOfBirthInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setDateOfBirthShaw(e.target.checked)}
          />
          <InputFeield
          inputName='Intrnal'
            title="Gender"
            show={genderShaw}
            internalHandlerFunc={(e: any) => setGenderInternal(e.target.checked)}
            showHandlerFunc={(e: any) => setGenderShaw(e.target.checked)}
          />
        </div>
        <AddQuestion addQuestionHandler={()=> openPersonalQuestion(true)}/>
      </>
    </FormContainer>
  );
};

export default PersonalInformation;
