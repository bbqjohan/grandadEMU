import { cva } from "class-variance-authority";
import {
  Button as RaButton,
  ButtonProps as RaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends RaButtonProps {
  /** The color type. */
  color?: "primary" | "secondary";

  /** Appearance of the button. */
  variant?: "solid" | "ghost" | "bordered";

  /** How large should the button be? */
  size?: "small" | "medium" | "large";

  isIconOnly?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  color = "primary",
  size = "small",
  variant = "solid",
  isDisabled,
  isIconOnly,
  ...props
}: ButtonProps) => {
  return (
    <RaButton
      isDisabled={isDisabled}
      className={twMerge(
        button({
          color,
          size,
          isDisabled,
          variant,
          isIconOnly,
        }),
      )}
      {...props}
    />
  );
};

const button = cva(
  "rounded-full px-4 py-1 text-sm transition-all duration-100",
  {
    variants: {
      color: {
        primary: twMerge(
          // Light
          "bg-neutral-900 text-neutral-100 hover:bg-neutral-700 active:bg-neutral-600",
          // Dark
          "dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:active:bg-neutral-400",
        ),
        secondary:
          "bg-blue-500 text-neutral-100 hover:bg-blue-600 active:bg-blue-700",
      },
      size: {
        medium: "text-base",
        large: "text-lg",
        small: "",
      },
      isDisabled: {
        false: null,
      },
      variant: {
        solid: "",
        ghost: "",
        bordered: "",
      },
      isIconOnly: {
        false: null,
        true: "p-1 fill-black disabled:fill-[#343434] dark:disabled:fill-[#343434]",
      },
    },
    compoundVariants: [
      {
        isDisabled: true,
        class: twMerge(
          // Light
          "disabled:bg-black disabled:border disabled:border-[#343434] disabled:text-[#343434]",
          // Dark
          "dark:disabled:bg-black dark:disabled:border dark:disabled:border-[#343434] dark:disabled:text-[#343434]",
        ),
      },
      {
        variant: "ghost",
        color: "primary",
        class: twMerge(
          // Light
          "bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100",
          // Dark
          "dark:bg-transparent dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900",
        ),
      },
      {
        variant: "bordered",
        color: "primary",
        class: twMerge(
          // Light
          "border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 active:border-neutral-600",
          // Dark
          "dark:border-2 dark:border-neutral-100 dark:bg-transparent dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900 dark:active:border-neutral-400",
        ),
      },
      {
        variant: "ghost",
        color: "secondary",
        class:
          "bg-transparent text-blue-500 hover:bg-blue-500 hover:text-neutral-100 active:bg-blue-700",
      },
      {
        variant: "bordered",
        color: "secondary",
        class:
          "border-2 border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-neutral-100 active:border-blue-700 active:bg-blue-700",
      },

      // Icon only primary.
      {
        variant: "solid",
        color: "primary",
        isIconOnly: true,
        class: "fill-white dark:fill-black",
      },
      {
        variant: "ghost",
        color: "primary",
        isIconOnly: true,
        class:
          "fill-black hover:fill-white  dark:fill-white dark:hover:fill-black",
      },
      {
        variant: "bordered",
        color: "primary",
        isIconOnly: true,
        class:
          "fill-black hover:fill-white dark:fill-white dark:hover:fill-black",
      },

      // Icon only secondary.
      {
        variant: "solid",
        color: "secondary",
        isIconOnly: true,
        class: "fill-white",
      },
      {
        variant: "ghost",
        color: "secondary",
        isIconOnly: true,
        class: "fill-blue-500 hover:fill-white",
      },
      {
        variant: "bordered",
        color: "secondary",
        isIconOnly: true,
        class: "fill-blue-500 hover:fill-white",
      },

      // Icon only sizes.
      {
        size: "small",
        isIconOnly: true,
        class: "size-8",
      },
      {
        size: "medium",
        isIconOnly: true,
        class: "size-10",
      },
      {
        size: "large",
        isIconOnly: true,
        class: "size-12",
      },
      {
        isIconOnly: true,
        variant: "bordered",
        class: "p-[0.2rem]",
      },
    ],
  },
);
