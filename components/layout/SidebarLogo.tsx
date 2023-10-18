import { useRouter } from "next/router";
import { FaMountainSun } from "react-icons/fa6";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300/10 cursor-pointer transition"
    >
      <FaMountainSun size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
