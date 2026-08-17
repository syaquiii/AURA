import { Bell } from "lucide-react";

const AccountBadge = () => {
  return (
    <div className="ml-auto flex w-fit items-center gap-3">
      <button className="hover:text-foreground relative text-white transition-colors">
        <Bell className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="account"
          src={`https://api.dicebear.com/9.x/notionists/svg?seed=1`}
          className="bg-muted h-8 w-8 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <h4 className="text-body-3">Nevin Mahatir</h4>
          <h5 className="text-body-4">Retail Manager</h5>
        </div>
      </div>
    </div>
  );
};

export default AccountBadge;
