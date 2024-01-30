import localFont from "next/font/local";

export const beautifulFont = localFont({
  src: [
    {
      path: "../assets/fonts/Moula-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Moula-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/Moula-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Moula-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Moula-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});
