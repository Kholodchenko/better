import { FC } from "react";

export type IButtonType = {
  onClick?: () => void | any;
  className?: string;
  variant?: string;
  size?: string;
  type?: string;
  children?: string | number | any;
}

export const Button: FC<IButtonType> = ({className, children = '', onClick}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}