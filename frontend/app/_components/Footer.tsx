import Image from "next/image";
import { useTheme } from "next-themes";
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="border-t-1 border-gray-300 dark:border-gray-800 shadow-sm dark:shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image
              src={`${PUBLIC_URL}/uploads/${
                theme == "light"
                  ? "bracketed_high_resolution_logo_black_transparent_f63d4ea087.png"
                  : "bracketed_high_resolution_logo_white_transparent_fa0df6594d.png"
              }`}
              width={150}
              height={50}
              alt="logo"
            />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
