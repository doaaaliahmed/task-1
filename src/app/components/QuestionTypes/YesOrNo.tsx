import { FC, useEffect, useState } from "react";

type IProps = {
  onAddYesOrNoQuestion: any;
  yesorno: string;
  onDisqualify: any;
};

const YesOrNo: FC<IProps> = ({ onAddYesOrNoQuestion, yesorno, onDisqualify }) => {
  return (
    <>
      <div className="w-full space-y-0.5">
        <label
          htmlFor="yesorno"
          className="text-base font-medium text-slate-900"
        >
          Question
        </label>
        <input
          type="text"
          id="yesorno"
          className="border-[1px] border-slate-500 rounded block w-full p-3 outline-0 text-base"
          onChange={(e) => onAddYesOrNoQuestion(e.target.value)}
          onBlur={() => onAddYesOrNoQuestion(yesorno)}
          value={yesorno}
          placeholder="type here"
        />

        <div>
          <label className="flex items-center mt-3 mx-2">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={(e) => onDisqualify(e.target.checked)}
              
            />
            <span className="ml-2 cursor-pointer text-xs">
              Disqualify candidate if the answer is no
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default YesOrNo;
