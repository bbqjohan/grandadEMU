import {
  Button,
  ButtonProps,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
} from "react-aria-components";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MyListProps<T> extends ListBoxProps<T> {}

export const MyList = <T extends object>({
  className,
  ...props
}: MyListProps<T>) => {
  return (
    <ListBox
      className={twMerge(clsx("flex flex-col gap-2", className))}
      {...props}
    ></ListBox>
  );
};

MyList.displayName = "MyList";

interface MyListItemProps extends ListBoxItemProps {}

export const MyListItem = (props: MyListItemProps) => {
  return (
    <ListBoxItem
      className={twMerge(
        clsx(
          "cursor-default",
          "px-3 py-2 rounded outline-none",
          "data-[selected]:bg-neutral-700",
          "data-[focused]:bg-neutral-800",
          "data-[focus-visible]:bg-neutral-800",
          "data-[hovered]:bg-neutral-800"
        )
      )}
      {...props}
    ></ListBoxItem>
  );
};

MyListItem.displayName = "MyListItem";
