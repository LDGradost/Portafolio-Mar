// 1600 x 900 frame on a 12-column grid: 80px margins, 24px gutters, 98px columns.
export const FRAME = { width: 1600, height: 900 } as const;
export const GRID = { columns: 12, margin: 80, gutter: 24, column: 98 } as const;

/** Left edge (px) of grid column n (1-based). */
export const colX = (n: number) => GRID.margin + (n - 1) * (GRID.column + GRID.gutter);
/** Width (px) spanned by n columns including inner gutters. */
export const spanW = (n: number) => n * GRID.column + (n - 1) * GRID.gutter;

export const COLORS = {
  ivory: "#F7F5F0",
  forest: "#193B35",
  sage: "#A9B9AA",
  charcoal: "#252B2A",
  warmgrey: "#777D79",
  sand: "#E9E4DA",
  white: "#FFFFFF",
  ochre: "#C49A62",
} as const;
