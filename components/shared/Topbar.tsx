import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
const Topbar = () => {
  return (
    <nav className="topbar">
      <Link
        href="/"
        className=" flex
        items-center  gap-4"
      >
        <Image src="/tenzin.png" alt="logo" width={35} height={28} />
        <p className=" text-heading3-bold text-light-1 max-xs:hidden">
          VITgram
        </p>
      </Link>
      <div className=" flex items-center gap-1 ">
        <div className=" block md:hidden">
          {/* back then we do manaul like conditional renders but clerk has it pre build*/}
          <SignedIn>
            <SignOutButton>
              <div className=" flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="lgout"
                  height={24}
                  width={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme:dark,
            elements: {
              organizationSwitcherTrigger: " py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
