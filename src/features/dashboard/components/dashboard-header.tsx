import { Button } from "@/shared/components/ui/button";
import { RefreshCcw } from "lucide-react";
import DateFilter from "./date-filter";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-heading-2 font-semibold text-white">
          Good Morning, Nevin
        </span>
        <span className="text-body-2 font-normal text-white">
          Here&apos;s your business overview for today
        </span>
      </div>
      <div className="flex items-center gap-4">
        <DateFilter />
        <Button
          className="w-44"
          iconPlacement="right"
          size={"default"}
          variant={"default"}
          icon={<RefreshCcw />}
        >
          Refresh Data
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
