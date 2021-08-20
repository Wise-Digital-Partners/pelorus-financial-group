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
      className={`group relative overflow-hidden bg-transparent border border-solid px-6 py-3 min-w-[170px] h-[50px] rounded-4xl inline-flex items-center justify-center text-center font-heading font-medium no-underline whitespace-nowrap ${
        altStyle
          ? "text-white hover:text-white bg-white/10 border-secondary-400"
          : "text-secondary-400 hover:text-white border-secondary-400"
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
            altStyle ? "text-secondary-400" : "text-white"
          } ${icon}`}
        ></i>
      )}
      <span className="z-10">{text}</span>
      <div className="bg-secondary-200 w-0 group-hover:w-full h-full absolute left-0 rounded-3xl transition-all duration-500 ease-linear"></div>
    </Tag>
  );
};

export default Button;
