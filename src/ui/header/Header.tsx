import Tag from "../comman/Tag";
import { IHeader } from "./header.types";

function Header({
  title = "",
  tag='',
}: IHeader) {
  return (
    <h5 className="mb-1 text-[14px] font-bold uppercase tracking-wide flex items-center">
      {title}
      {<Tag text={tag}/>}
    </h5>
  );
}

export default Header;
