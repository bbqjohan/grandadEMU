import { Button, ButtonProps } from "react-aria-components";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MyButtonProps extends ButtonProps {
  size?: "m" | "l";
  color?: "primary" | "secondary";
}

export const MyButton = ({
  size = "m",
  color = "primary",
  className,
  ...props
}: MyButtonProps) => {
  return (
    <Button
      className={twMerge(
        clsx(
          "rounded-full bg-neutral-100 py-2 px-5 text-black text-base hover:bg-neutral-200 active:bg-neutral-300 transition-colors focus:outline-none focus:ring focus:ring-cyan-300 duration-100 disabled:bg-black disabled:border-2 disabled:border-neutral-500 disabled:text-neutral-500"
        )
      )}
      {...props}
    ></Button>
  );
};

MyButton.displayName = "MyButton";
