import StarRatings from "../../../../../ui/star/StarRatings";
import { ClipboardPlus, FileCheck2, Package, Tags, Trees } from "lucide-react";
import SummaryLayout from "../../../../../ui/summaryLayout/SummaryLayout";

const Feedback = () => {
  return (
<SummaryLayout  title={"ratings & feedback"} tag={""}>
      <div className="space-y-4 mt-2">
        <div className="flex flex-wrap items-start space-x-12">
          <div className="flex flex-col items-start space-y-2">
            <button className="flex items-center">
              <span className="mr-1">
                <Package className="w-5"/>
              </span>
              <span className="text-[12px]">Packing & Quality</span>
            </button>
            <StarRatings defaultRating={5} />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <button className="flex items-center">
              <span className="mr-1">
                <ClipboardPlus className="w-5" />
              </span>
              <span className="text-[12px]">Documentation</span>
            </button>

            <StarRatings defaultRating={4} />
          </div>

          <div className="flex flex-col items-start space-y-2">
            <button className="flex items-center">
              <span className="mr-1">
                <FileCheck2 className="w-5" />
              </span>
              <span className="text-[12px]">Good according to specification</span>
            </button>
            <StarRatings defaultRating={4}  />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <button className="flex items-center">
              <span className="mr-1">
                <Tags className="w-5" />
              </span>
              <span className="text-[12px]">Proper Labeling of items</span>
            </button>
            <StarRatings defaultRating={5}  />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <button className="flex items-center">
              <span className="mr-1">
                <Trees className="w-5" />
              </span>
              <span className="text-[12px]">Respect of environment</span>
            </button>
            <StarRatings defaultRating={4}  />
          </div>
        </div>
      </div>
      </SummaryLayout>
  );
};

export default Feedback;