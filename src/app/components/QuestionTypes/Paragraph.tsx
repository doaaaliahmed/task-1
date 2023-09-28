import { FC, useEffect, useState } from "react";

type IProps = {
  onAddParagraph: any;
  paragraph: string;
};

const Paragraph: FC<IProps> = ({ onAddParagraph , paragraph }) => {
  
  return (
    <>
      <div className="w-full space-y-0.5">
        <label
          htmlFor="paragraph"
          className="text-base font-medium text-slate-900"
        >
          Question
        </label>
        <input
          type="text"
          id="paragraph"
          className="border-[1px] border-slate-500 rounded block w-full p-3 outline-0 text-base"
          onChange={(e)=> onAddParagraph(e.target.value)}
          onBlur={() => onAddParagraph(paragraph)}
          value={paragraph}
          placeholder="type here"
          
        />
      </div>
    </>
  );
};

export default Paragraph;
