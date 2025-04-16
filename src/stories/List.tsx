import { cva } from "class-variance-authority";
import clsx from "clsx";
import {
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export type ConsoleListItem = {
  name: string;
};

export interface ListProps<T> extends ListBoxProps<T> {
  label?: React.ReactNode;
}

/** Primary UI component for listing options. */
export const List = <T extends object>({ label, ...props }: ListProps<T>) => {
  return (
    <>
      {label ? (
        <div className="flex flex-col gap-4">
          <ListLabel children={label} />
          <div className="border border-neutral-700"></div>
          <ListBox
            aria-label={typeof label === "string" ? label : ""}
            className={list({})}
            {...props}
          />
        </div>
      ) : (
        <ListBox className={list({})} {...props} />
      )}
    </>
  );
};

const list = cva("flex flex-col gap-2");

export interface ListItemProps extends ListBoxItemProps {}

export const ListItem = (props: ListItemProps) => {
  return <ListBoxItem className={listItem({})} {...props}></ListBoxItem>;
};

const listItem = cva(
  twMerge(
    "dark:text-neutral-100 cursor-default",
    "rounded px-3 py-2 outline-none",
    "data-[selected]:bg-neutral-700 data-[selected]:text-neutral-100",
    "data-[focused]:bg-neutral-800 data-[focused]:text-neutral-100",
    "data-[focus-visible]:bg-neutral-800 data-[focus-visible]:text-neutral-100",
    "data-[hovered]:bg-neutral-800 data-[hovered]:text-neutral-100",
  ),
);

export interface ListTitleProps {
  children: React.ReactNode;
}

export const ListLabel = ({ children }: ListTitleProps) => {
  return (
    <div className="fill-white text-xl font-medium dark:text-neutral-100">
      {children}
    </div>
  );
};
