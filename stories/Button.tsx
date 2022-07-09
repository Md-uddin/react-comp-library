import React from "react";
import "./button.css";
import styled from "styled-components";
import { Typography } from "@mui/material";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
const MyButton = styled.button`
  background: "green";
  height: "60px";
  text-transform: uppercase;
`;
const MyText = styled(Typography)`
  color: blue;
  font-weight: bold;
`;

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <>
      <MyButton
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </MyButton>
      <MyText>this is materail ui</MyText>
    </>
  );
};
