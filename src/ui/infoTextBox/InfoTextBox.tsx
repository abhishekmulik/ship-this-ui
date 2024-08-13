import { IInfoTextBox } from "./infoTextBox.types";

function InfoTextBox({
  title = "",
  subTitle = "",
  subTitleCss
}:IInfoTextBox) {
  return (
    <div className="flex flex-col">
      <p className={`text-[10px] text-slate-400`}>{title}</p>
      <p
        className={`text-[12px] ${
          subTitleCss
            ? subTitleCss
            : "text-gray-600"
        } ${subTitleCss}`}
      >
        {subTitle}
      </p>
    </div>
  );
}

export default InfoTextBox;
