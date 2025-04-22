import { Label, Text } from "react-aria-components";

export interface SettingProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Setting = ({
  label,
  description,
  children,
  ...props
}: SettingProps) => {
  return (
    <fieldset className="flex gap-8 text-neutral-100">
      <div className="flex flex-col justify-start gap-1">
        <Label className="text-base font-semibold">{label}</Label>
        <Text slot="description" className="text-sm text-neutral-500">
          {description}
        </Text>
      </div>
      <div className="flex">{children}</div>
    </fieldset>
  );
};
