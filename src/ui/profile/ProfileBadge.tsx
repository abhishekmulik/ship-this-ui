import { classNames } from "../../utils/common";
import { IProfileBadge } from "./profile.types";

function ProfileBadge({text = "",bgColor = "#000"}:IProfileBadge) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={classNames("h-6 w-6 rounded-[50%] text-white-100 flex justify-center items-center p-2 text-xs")}
        style={{
          backgroundColor: bgColor
        }}
      >
      {text}
      </div>
    </div>
  );
}

export default ProfileBadge;
