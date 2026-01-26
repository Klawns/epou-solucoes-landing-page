"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/app/lib/utils";

/**
 * A component that allows users to select a value from a list of options.
 *
 * This component is a wrapper around the `SelectPrimitive.Root` component from Radix UI.
 *
 * @param {React.ComponentProps<typeof SelectPrimitive.Root>} props - The props for the component.
 * @returns {JSX.Element} The rendered select component.
 */
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

/**
 * A component that groups options within a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Group` component from Radix UI.
 *
 * @param {React.ComponentProps<typeof SelectPrimitive.Group>} props - The props for the component.
 * @returns {JSX.Element} The rendered select group component.
 */
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

/**
 * A component that displays the selected value in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Value` component from Radix UI.
 *
 * @param {React.ComponentProps<typeof SelectPrimitive.Value>} props - The props for the component.
 * @returns {JSX.Element} The rendered select value component.
 */
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

/**
 * A component that triggers the opening of a `Select` component's options.
 *
 * This component is a wrapper around the `SelectPrimitive.Trigger` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { size?: "sm" | "default" }} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Trigger>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select trigger component.
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
  }
>(({ className, size = "default", children, ...props }, ref) => {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full cursor-pointer items-center justify-between gap-3 rounded-md border bg-transparent px-4 py-2 text-base whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-15 data-[size=sm]:h-15 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-5 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/**
 * A component that displays the options of a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Content` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Content>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select content component.
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    {
      className,
      children,
      position = "item-aligned",
      align = "center",
      ...props
    },
    ref
  ) => {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[var(--radix-select-trigger-width)] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            position === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className
          )}
          position={position}
          align={align}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              "p-1",
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

/**
 * A component that displays a label for a group of options in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Label` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Label>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select label component.
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Label
      ref={ref}
      data-slot="select-label"
      className={cn(
        "text-muted-foreground py-2.5 pl-3 pr-10 text-sm font-semibold",
        className
      )}
      {...props}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/**
 * A component that displays an option in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Item` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Item>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select item component.
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-pointer items-center gap-3 rounded-md py-3 pr-10 pl-3 text-base outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-3",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-3 flex size-5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-5" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

/**
 * A component that separates groups of options in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.Separator` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.Separator>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select separator component.
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Separator
      ref={ref}
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/**
 * A button that scrolls up through the options in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.ScrollUpButton` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollUpButton>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select scroll up button component.
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/**
 * A button that scrolls down through the options in a `Select` component.
 *
 * This component is a wrapper around the `SelectPrimitive.ScrollDownButton` component from Radix UI.
 *
 * @param {React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>} props - The props for the component.
 * @param {React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>>} ref - The ref to the component.
 * @returns {JSX.Element} The rendered select scroll down button component.
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
