interface NavBarItem {
  itemLabel: string;
  href: string;
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
}

export type { NavBarItem };
