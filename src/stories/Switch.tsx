import { cva } from "class-variance-authority";
import { useState } from "react";
import {
  Switch as RaSwitch,
  SwitchProps as RaSwitchProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface SwitchProps extends RaSwitchProps {
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const Switch = ({ size, ...props }: SwitchProps) => {
  const [checked, setChecked] = useState(true);
  return (
    <RaSwitch
      className={twMerge(
        "group flex items-center gap-3 text-sm font-semibold text-black dark:text-neutral-100",
        size === "medium" ? "text-base" : "",
        size === "large" ? "text-lg" : "",
      )}
      isSelected={checked}
      onChange={setChecked}
      {...props}
    >
      <div
        className={twMerge(
          "box-border flex h-6 w-12 shrink-0 cursor-default items-center rounded-full bg-neutral-500 p-1 outline-2 outline-offset-2 outline-sky-600 transition duration-200 ease-in-out group-data-[selected]:bg-sky-600 group-data-[focus-visible]:outline",
          size === "medium" ? "h-8 w-[4.5rem] p-2" : "",
          size === "large" ? "h-9 w-24 p-2" : "",
        )}
      >
        <span
          className={twMerge(
            "flex h-4 w-4 rounded-full bg-white shadow-sm transition duration-200 ease-in-out group-data-[selected]:translate-x-[calc(150%)]",
            size === "medium"
              ? "h-5 w-5 group-data-[selected]:translate-x-[calc(180%)]"
              : "",
            size === "large"
              ? "h-6 w-6 group-data-[selected]:translate-x-[calc(230%)]"
              : "",
          )}
        />
      </div>
      Wi-Fi
    </RaSwitch>
  );
};
