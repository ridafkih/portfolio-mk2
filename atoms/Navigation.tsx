import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import usePlink from "@/hooks/usePlink";

interface NavItem {
  name: string;
  path: string;
}

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.VFC<NavigationProps> = ({ items }) => {
  const router = useRouter();
  const plink = usePlink();

  const handleClick = () => plink.play();

  return (
    <nav>
      <ul className="flex gap-4">
        {items.map(({ name, path }) => {
          const isOnPage = router.pathname === path;
          const weightClass = isOnPage
            ? "font-normal opacity-100"
            : "font-thin opacity-80";

          return (
            <li key={name}>
              <Link href={path} passHref>
                <a
                  onClick={!isOnPage ? handleClick : void 0}
                  className={`cursor-pointer after:bg-transparent transition-opacity hover:opacity-100 ${weightClass}`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
