import Link from "next/link";
import Image from "next/image";

import { links } from "../../../config";

const Footer = () => {
  return (
    <>
      <footer className="bg-very-dark-black-blue py-10 text-center customized-rounded-tr">
        <Link href="/">
          <a>
            <Image
              src="/logo.svg"
              width="101"
              height="40"
              alt="Blogr landing page logo"
              quality="50"
            />
          </a>
        </Link>

        <div className="text-white font-ubuntu">
          {links.map((item) => {
            const { title, children } = item;

            return (
              <div className="py-4" key={title}>
                <strong className="font-bold">{title}</strong>
                <ul className="pt-2 text-grayish-blue">
                  {children.map((child) => (
                    <li
                      className="py-px hover:underline cursor-pointer"
                      key={child}
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
