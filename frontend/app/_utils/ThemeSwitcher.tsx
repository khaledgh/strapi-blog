"use client";
import { useTheme } from "next-themes";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
export const ThemeSwitcher = (props: any) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    isSelected ? setTheme("light") : setTheme("dark");
    
  }, [isSelected]);

  if (!mounted) return null;

  return (
    <div>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <IoSunnyOutline /> : <IoMoonOutline />}
        </div>
      </Component>
    </div>
  );
};
