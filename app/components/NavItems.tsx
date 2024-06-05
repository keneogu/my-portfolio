import Link from "next/link";

const NavItems = ({ title, address, Icon }: NavItem) => {
  return (
    <div>
      <Link href={address} className="flex items-center md:mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl mr-2" />
        <p className="sm:inline text-xl font-semibold md:text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default NavItems;
