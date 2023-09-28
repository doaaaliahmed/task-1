"use client";

import { QuestionType } from "@/core/enums/question.enum";
import FormContainer from "./FormContainer";
import { useEffect, useState } from "react";
import Paragraph from "./QuestionTypes/Paragraph";
import { IQuestionTemplate } from "@/core/interfaces/user.interface";
import YesOrNo from "./QuestionTypes/YesOrNo";

const AdditionalQuestion = () => {
  const [questions , setQuestions] = useState<IQuestionTemplate|null>(null)
  const [selectedType, setSelectedType] = useState(`${QuestionType.Paragraph}`);
  const [paragraph, setParagraph] = useState<string>("");
  const [yesorno, setYesOrNo] = useState<string>("");
  const [disqualify , setDisqualify] = useState<boolean>(false)

  const deleteQuestionHalndler = () =>{
     setParagraph("")
     setYesOrNo("")
    };

  const handleParagraphQuestion = (text: string) => setParagraph(text);


  const handleYesQuestion = (text : string)=>  setYesOrNo(text)
  const handleDisqualifyQuestion = (checked : boolean)=>  setDisqualify(checked)

  const saveQuestionHandler=()=>{
    setQuestions( 
      {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      type : selectedType , 
      question : paragraph,
      choices:[selectedType],
      maxChoice : 0,
      disqualify : disqualify,
      other:false
    }
     )


    console.log(questions)
  }

 
  return (
    <FormContainer title="Questions">
      <div className="flex flex-col w-full gap-6 ">
        <div className="w-full space-y-0.5">
          <label
            htmlFor="type"
            className="text-base font-medium text-slate-900"
          >
            Type
          </label>
          <select
            id="type"
            className="border-[1px] border-slate-500 rounded block w-full p-3 outline-0 text-base text-slate-400"
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}
          >
            <option value={QuestionType.Paragraph}>
              {QuestionType.Paragraph}
            </option>
            <option value={QuestionType.Dropdown}>
              {QuestionType.Dropdown}
            </option>
            <option value={QuestionType.FileUpload}>
              {QuestionType.FileUpload}
            </option>
            <option value={QuestionType.MultipleChoice}>
              {QuestionType.MultipleChoice}
            </option>
            <option value={QuestionType.YesNo}>{QuestionType.YesNo}</option>
            <option value={QuestionType.ShortAnswer}>
              {QuestionType.ShortAnswer}
            </option>
          </select>
        </div>
        {selectedType === QuestionType.Paragraph ? (
          <Paragraph
            onAddParagraph={handleParagraphQuestion}
            paragraph={paragraph}
          />
        ) : selectedType === QuestionType.YesNo ? (
          <YesOrNo
          onAddYesOrNoQuestion={handleYesQuestion}
          onDisqualify={handleDisqualifyQuestion}
          yesorno={yesorno}
          />
        ) : null}
        <div className="w-full flex items-center justify-between">
          <button
            onClick={deleteQuestionHalndler}
            className="flex items-center  text-sm font-bold text-[#A80000] "
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

            <span>Delete question</span>
          </button>
          <button onClick={saveQuestionHandler} className="px-3 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-green-900 rounded-lg hover:bg-green-800 focus:outline-none ">
            save
          </button>
        </div>
      </div>
    </FormContainer>
  );
};

export default AdditionalQuestion;
