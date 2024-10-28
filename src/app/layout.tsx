import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import ClerkProvider from "@/providers/clerk-provider";

const manrope_font = Manrope({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opal",
  description: "Share AI powered videos with your friends.",
  icons: {
    icon: {
      url: "/opal-logo.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${manrope_font.className} !bg-background antialiased overflow-x-hidden`}
        >
          <Providers
            cloudinary_api_key={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!}
            cloudinary_cloud_name={
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!
            }
            cloudinary_preset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!}
            cloudinary_upload_folder={
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_FOLDER!
            }
          >
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
