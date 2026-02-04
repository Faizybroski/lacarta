import { Mail, Globe } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-[#cfa43a] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <span className="hidden sm:inline">
            hola@lacarta.co
          </span>
        </div>

        {/* CENTER */}
        <div className="hidden md:block font-medium text-center">
          Download our FREE Cartagena Travel Guide!
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline cursor-pointer hover:underline">
            Advertise With Us
          </span>

          <div className="flex items-center gap-1 cursor-pointer">
            <Globe size={14} />
            <span>EN</span>
          </div>
        </div>

      </div>
    </div>
  );
}
