import Image from "next/image";
import addIcon from "../../../../public/add-icon.svg";
import { FC } from "react";

type IProps = {
  addQuestionHandler: () => void;
};

const AddQuestion: FC<IProps> = ({ addQuestionHandler }) => {
  return (
    <div className="mt-10 mb-6 ">
      <button
        className="flex items-center justify-start gap-2 font-semibold"
        onClick={addQuestionHandler}
      >
        <Image src={addIcon} alt="add icon" width={15} height={15} /> Add
        question
      </button>
    </div>
  );
};

export default AddQuestion;
