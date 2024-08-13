import { IFilterOption } from "./IFilterOption.types";
import { classNames } from "../../utils/common";

function FilterOption({
  label,
  defaultIcon,
  hoveredIcon,
  hasHoverState,
  labelCss=''
}: IFilterOption) {
  return (
    <div
      className={`w-fit group flex items-center ${
        hasHoverState ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <span
        className={classNames(`underline text-sm font-medium mr-2 text-black-100 underline-offset-4 ${
          hasHoverState ? "group-hover:text-green-200" : ""
        }`, labelCss)}
      >
        {label}
      </span>
      {hasHoverState ? (
        <>
          <span className="group-hover:hidden block group-hover:stroke-green-200">
            {defaultIcon}
          </span>
          <span className="group-hover:block hidden group-hover:stroke-green-200">
            {hoveredIcon}
          </span>
        </>
      ) : (
        <>{defaultIcon && <span>{defaultIcon}</span>}</>
      )}
    </div>
  );
}

export default FilterOption;
