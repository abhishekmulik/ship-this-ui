import Card from "../../../../ui/card/Card";
import { Anchor, Info, Pin } from "lucide-react";
import ShipCard from "../../../../ui/shipCard/ShipCard";
import ProfileBadge from "../../../../ui/profile/ProfileBadge";
import { classNames } from "../../../../utils/common";

interface TeamRecord {
  id: string;
  title: string;
  isPinned: boolean;
  profile: string;
  anchored: boolean;
  type: string;
  info: boolean;
  date: string;
  ship: string;
  selectedOrderId: string
}

function SingleOrder({
  anchored,
  date,
  id,
  info,
  isPinned,
  profile,
  ship,
  title,
  type,
  selectedOrderId
}: TeamRecord) {
  const colors = ['red', 'green', 'blue','purple'];
  return (
    <Card className={classNames(selectedOrderId === id ? 'border border-black-100': 'border border-transparent', "bg-white-300 py-0 border-green-900")}>

      <div>
        <div className="flex justify-between">
          <div>
            <div className="font-semibold text-sm text-black-600">{id}</div>
            <div className="font-semibold text-sm text-black-600">{title}</div>
          </div>
          <div className="flex gap-2 items-center">
            {isPinned && (
              <span>
                <Pin className="w-4" />
              </span>
            )}
            {anchored && (
              <span>
                <Anchor className="w-4" />
              </span>
            )}
            {info && (
              <span>
                <Info className="w-4" />
              </span>
            )}
            {/* <span className="h-6 w-6 rounded-[50%] bg-green-200 text-white-100 flex justify-center items-center p-2 text-xs">
              {profile}
            </span> */}
            <ProfileBadge text={profile} bgColor={colors[Math.floor(Math.random()*4)]}/>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <ShipCard name={ship} />
          <div>
            <div className="font-thin text-xs text-end">{type}</div>
            <div className="font-thin text-xs text-end">{date}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default SingleOrder;
