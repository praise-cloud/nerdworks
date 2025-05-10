export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Library", href: "/library" },
  { label: "Create", href: "/creator/dashboard" },
  { label: "Sell", href: "/sell" },
];