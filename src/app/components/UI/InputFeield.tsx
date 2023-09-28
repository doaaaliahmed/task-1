import { FC } from "react";

type IProps = {
  title: string;
  inputName: string;
  internalHandlerFunc: any;
  showHandlerFunc: any;
  show:boolean;
};

const InputFeield: FC<IProps> = ({
  title,
  inputName,
  show,
  internalHandlerFunc,
  showHandlerFunc,
}) => {
  return (
    <div className="w-full border-b-[1px] border-slate-300 py-6 flex items-center justify-between">
      <p className="font-bold text-base ">{title}</p>
      <div className="flex items-center justify-end gap-4 ">
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={internalHandlerFunc}
            />
            <span className="ml-2 cursor-pointer">{inputName}</span>
          </label>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={showHandlerFunc}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {show ?  "Show" : "Hide"}
          </span>
        </label>
      </div>
    </div>
  );
};

export default InputFeield;
