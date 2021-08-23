import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import triangle from "../../images/global/triangle.svg";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group relative inline-flex items-end font-heading text-primary-400 hover:text-secondary-400 font-medium tracking-wide pb-2 ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      altStyle={altStyle}
    >
      <div className="relative">
        {text}
        <span className="absolute w-full bottom-0 left-0 right-auto bg-primary-400 h-0.5 transition-all duration-500 ease-in-out"></span>
      </div>

      <div className="relative pl-2.5 left-0 group-hover:left-2.5 transition-all duration-500 ease-in-out">
        <img src={triangle} className="pb-2" alt="Triangle icon" />
        <span className="absolute w-full bottom-0 left-0 right-auto bg-primary-400 h-0.5 transition-all duration-500 ease-in-out"></span>
      </div>
    </Tag>
  );
};

export default Button;
