/** @jsxImportSource @emotion/react */
import React, { createElement, FunctionComponent, KeyboardEvent } from "react";
import { ClassNames } from "@emotion/react";
export type ComponentContianer = "span" | "div";

export type LinkButtonRole = "button" | "link";

export interface LinkButtonProps {
  onClick: (e: MouseEvent | KeyboardEvent) => void;
  children?: string | string[] | React.ReactElement | null;
  className?: string;
  disabled?: boolean;
  componentContianer?: ComponentContianer;
  dataTestid?: string;
  title?: string;
  role?: LinkButtonRole;
  tabIndex?: number;
}


const LinkButton: FunctionComponent<LinkButtonProps> = ({
  onClick,
  children = null,
  className = "",
  disabled = false,
  componentContianer = "span",
  dataTestid = "link-button",
  title = "",
  role = "button",
  tabIndex = -1,
}: LinkButtonProps): JSX.Element => {
  let interactProps = {};

  if (!disabled) {
    interactProps = {
      onClick,
      onKeyDown: (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          onClick(e);
        }
      },
      role,
      tabIndex,
      title,
    };
  }

  return (
    <ClassNames>
    {({ css, cx }) => createElement(
    componentContianer,
    {
      "data-testid": dataTestid,
      className: cx(className,  css`
      border: none;
      cursor: pointer;
      display: inline;
      color: #252525;
      outline: none;
      margin: 0;
      padding: 0;
      width: unset;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
    
      &:active,
      &:hover,
      &:focus:not(:active) {
        color: #252525;
        border: 0;
        box-shadow: unset;
      }
    `),
      ...interactProps,
    },
    children
  )}

    </ClassNames>
  );  
//   return createElement(
//     componentContianer,
//     {
//       "data-testid": dataTestid,
//       css: [baseLinkCss, combineCss],
//       ...interactProps,
//     },
//     children
//   );
};

export default LinkButton;
