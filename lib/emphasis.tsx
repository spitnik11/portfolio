import React from "react";

// Inline emphasis for content strings, so key words catch the eye:
//   **term**  → primary emphasis, the accent colour (drawn to first)
//   *term*    → secondary emphasis, brighter than muted body text
// Restraint is the whole point — a couple of marks per paragraph, never more.
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

export function emphasize(text: string): React.ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-medium text-primary">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={i} className="font-medium text-foreground">
          {part.slice(1, -1)}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Plain text for metadata / titles (strips the emphasis markers).
export const stripEmphasis = (text: string) => text.replace(/\*/g, "");
