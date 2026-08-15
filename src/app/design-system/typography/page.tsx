import React from "react";

const typographySystem = [
  { name: "Display", className: "text-display", rem: "2.5rem", px: "40px" },
  { name: "Heading 1", className: "text-heading-1", rem: "2rem", px: "32px" },
  {
    name: "Heading 2",
    className: "text-heading-2",
    rem: "1.75rem",
    px: "28px",
  },
  { name: "Heading 3", className: "text-heading-3", rem: "1.5rem", px: "24px" },
  {
    name: "Heading 4",
    className: "text-heading-4",
    rem: "1.25rem",
    px: "20px",
  },
  {
    name: "Heading 5",
    className: "text-heading-5",
    rem: "1.125rem",
    px: "18px",
  },
  { name: "Heading 6", className: "text-heading-6", rem: "1rem", px: "16px" },
  {
    name: "Heading 7",
    className: "text-heading-7",
    rem: "0.875rem",
    px: "14px",
  },
  {
    name: "Heading 8",
    className: "text-heading-8",
    rem: "0.75rem",
    px: "12px",
  },
  {
    name: "Heading 9",
    className: "text-heading-9",
    rem: "0.625rem",
    px: "10px",
  },
  { name: "Body 1", className: "text-body-1", rem: "1rem", px: "16px" },
  { name: "Body 2", className: "text-body-2", rem: "0.875rem", px: "14px" },
  { name: "Body 3", className: "text-body-3", rem: "0.75rem", px: "12px" },
];

export default function TypographyPage() {
  return (
    <div className="space-y-12 pb-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Typography</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Type scale and font weights used across the application. Base font is
          Inter, leading 140%, letter-spacing 0%.
        </p>
      </div>

      <div className="bg-card flex flex-col space-y-10 rounded-xl border p-8 shadow-sm">
        {typographySystem.map((item) => (
          <div
            key={item.name}
            className="border-border/50 flex flex-col gap-6 border-b pb-8 last:border-0 last:pb-0 md:flex-row md:items-center"
          >
            {/* Indicators */}
            <div className="flex w-32 shrink-0 flex-col">
              <span className="text-foreground text-sm font-semibold">
                {item.name}
              </span>
              <span className="text-muted-foreground mt-1 text-[11px]">
                {item.rem} / {item.px}
              </span>
            </div>

            {/* Text Variants */}
            <div className="flex flex-1 flex-wrap gap-x-8 gap-y-4">
              <div className={`${item.className} text-foreground font-normal`}>
                Regular
              </div>
              <div className={`${item.className} text-foreground font-medium`}>
                Medium
              </div>
              <div
                className={`${item.className} text-foreground font-semibold`}
              >
                SemiBold
              </div>
              <div className={`${item.className} text-foreground font-bold`}>
                Bold
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
