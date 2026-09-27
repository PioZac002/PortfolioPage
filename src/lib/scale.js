/* One shared measure. Every duration band on the page is positioned against
   these two instants and nothing else, so a span occupies exactly the share
   of the record it actually took. Change the scale here or nowhere. */

export const SCALE_START = 2021 + 8 / 12; // 2021-09, the record's first dated fact
export const SCALE_END = 2026.75; // the present edge of the record

export const at = (year) =>
  ((year - SCALE_START) / (SCALE_END - SCALE_START)) * 100;

export const clamp = (value) => Math.max(0, Math.min(100, value));
