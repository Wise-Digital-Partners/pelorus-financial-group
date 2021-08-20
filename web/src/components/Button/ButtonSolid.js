import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden px-6 py-3 min-w-[170px] h-[50px] rounded-3xl inline-flex items-center justify-center text-center font-heading font-medium no-underline whitespace-nowrap before:bg-secondary-800 before:w-0 hover:before:w-full before:h-full before:absolute before:left-0 before:rounded-3xl before:transition-all before:duration-500 before:ease-linear ${
        altStyle ? "" : "bg-secondary-400 text-white hover:text-white"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      altStyle={altStyle}
    >
      {icon && (
        <i
          className={`mr-2 z-10 ${
            altStyle ? "text-white" : "text-white"
          } ${icon}`}
        ></i>
      )}
      <span className="z-10">{text}</span>
    </Tag>
  );
};

export default Button;
