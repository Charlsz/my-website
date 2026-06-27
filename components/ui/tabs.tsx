"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type React from "react";

export function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={className}
      style={{ display: "flex", flexDirection: "column", gap: 24 }}
      {...props}
    />
  );
}

export function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      className={className}
      style={{
        position: "relative",
        zIndex: 0,
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        gap: 2,
        borderRadius: 8,
        background: "#f4f4f5",
        padding: 2,
        color: "#a1a1aa",
      }}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "var(--active-tab-height)",
          width: "var(--active-tab-width)",
          transform: "translateX(var(--active-tab-left)) translateY(calc(-1 * var(--active-tab-bottom)))",
          transition: "width 0.2s ease-in-out, transform 0.2s ease-in-out",
          zIndex: -1,
          borderRadius: 6,
          background: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      />
    </TabsPrimitive.List>
  );
}

export function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={"tabs-tab" + (className ? ` ${className}` : "")}
      style={{
        position: "relative",
        display: "flex",
        height: 32,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        borderRadius: 6,
        border: "1px solid transparent",
        padding: "0 12px",
        fontSize: 14,
        fontWeight: 500,
        outline: "none",
        color: "#a1a1aa",
        background: "transparent",
      }}
      {...props}
    />
  );
}

export function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={className}
      style={{ flex: 1, outline: "none" }}
      {...props}
    />
  );
}
