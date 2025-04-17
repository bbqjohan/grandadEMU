import { cva } from "class-variance-authority";
import {
  Label,
  Button as RaButton,
  ButtonProps as RaButtonProps,
  TextField as RaTextField,
  Input as RaInput,
  TextFieldProps as RaTextFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface TextFieldProps extends RaTextFieldProps {
  label?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const TextField = ({
  label,
  startContent,
  endContent,
  isDisabled,
  ...props
}: TextFieldProps) => {
  return (
    <RaTextField
      isDisabled={isDisabled}
      className="flex flex-col gap-2 text-sm"
      {...props}
    >
      <Label className={twMerge(labelSlot())}>{label}</Label>
      <div
        className={twMerge(
          inputWrapperSlot({
            startIcon: !!startContent,
            isDisabled,
          }),
        )}
      >
        {startContent ? (
          <div className="mx-2 size-6 fill-[#808080]">{startContent}</div>
        ) : null}

        <RaInput className={twMerge(inputSlot())} />

        {endContent ? (
          <div className="mx-2 size-6 fill-[#808080]">{endContent}</div>
        ) : null}
      </div>
    </RaTextField>
  );
};

const labelSlot = cva("text-neutral-900 dark:text-neutral-100");

const inputWrapperSlot = cva(
  twMerge(
    // Theme
    "flex items-center rounded text-sm transition-all duration-100 border focus-within:outline-2 w-full outline-none outline-offset-[-1px]",
    // Light
    " focus-within:outline-sky-500 text-neutral-900 border-neutral-300 hover:bg-neutral-100",
    // Dark
    "dark:text-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:border-neutral-600 focus-within:outline-sky-500",
  ),
  {
    variants: {
      startIcon: {
        false: "px-1",
        true: null,
      },
      isDisabled: {
        false: null,
        true: "bg-neutral-800 text-[#606060] hover:bg-neutral-800 dark:bg-black dark:border dark:border-[#343434] dark:text-[#343434] dark:hover:bg-black",
      },
    },
  },
);

const inputSlot = cva("w-full outline-none px-1 py-2 bg-transparent");
