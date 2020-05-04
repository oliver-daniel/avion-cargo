import Link from "next/link";
import routes from "../routes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const NavLink = ({
  href = "/[lang]/[route]",
  route,
  className = "",
  children,
  ...props
}) => {
  const { i18n } = useTranslation();

  let as = `/${i18n.language}`;
  let isActive = false;

  if (routes.hasOwnProperty(route) && route !== "home") {
    as += "/" + routes[route][i18n.language].href;
  } else if (route === "blog") {
    as += "/blog";
  }

  if (typeof window !== "undefined") {
    isActive = window.location.pathname === as;
  }

  return (
    <Link href={href} as={as}>
      <a className={className + (isActive ? " active" : "")} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
