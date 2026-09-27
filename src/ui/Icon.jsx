/* Authored icon set. One 24-unit grid, 1.6 stroke, square caps and miter
   joins, because the record's whole drawing language is right-angled. Brand
   marks are the two filled exceptions; nothing here is a unicode glyph. */

const Icon = ({ name, size = 16, className = '', ...rest }) => {
  const solid = name === 'github' || name === 'linkedin';
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`icon${solid ? ' icon--solid' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
};

const paths = {
  github: (
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.94 3.2 9.13 7.65 10.61.56.1.76-.24.76-.53l-.01-1.9c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.64-1.24-1.64-1.01-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.53 0-1.22.43-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.06-1.15 3.06-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.24-5.11 5.52.4.35.76 1.02.76 2.06l-.01 3.05c0 .29.2.64.77.53a11.11 11.11 0 0 0 7.64-10.61C23.1 5.33 18.27.5 12 .5Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.6 21.5V9.9h4.76v11.6H2.6Zm7.34 0V9.9h4.57v1.59h.06c.64-1.17 2.19-2.4 4.5-2.4 3.63 0 4.43 2.28 4.43 5.4v7.01h-4.75v-6.22c0-1.48-.27-3-2.1-3-1.76 0-2.25 1.4-2.25 2.9v6.32H9.94Z" />
  ),
  mail: (
    <>
      <path d="M2.75 5.25h18.5v13.5H2.75z" />
      <path d="m2.75 5.25 9.25 7 9.25-7" />
    </>
  ),
  copy: (
    <>
      <path d="M8.75 2.75h12.5v12.5" />
      <path d="M2.75 8.75h12.5v12.5H2.75z" />
    </>
  ),
  check: <path d="m3.5 12.5 5 5 11.5-12" />,
  external: (
    <>
      <path d="M14 3.5h6.5V10" />
      <path d="m20.5 3.5-9 9" />
      <path d="M17.5 14v6.5h-14v-14H10" />
    </>
  ),
  chevron: <path d="m5 9 7 7 7-7" />,
  close: (
    <>
      <path d="m4.5 4.5 15 15" />
      <path d="m19.5 4.5-15 15" />
    </>
  ),
  left: <path d="m15 4-8 8 8 8" />,
  right: <path d="m9 4 8 8-8 8" />,
  stack: (
    <>
      <path d="M2.75 6.5 12 2.25l9.25 4.25L12 10.75 2.75 6.5Z" />
      <path d="m2.75 12 9.25 4.25L21.25 12" />
      <path d="m2.75 17.5 9.25 4.25 9.25-4.25" />
    </>
  ),
  paperclip: (
    <>
      <path d="M17.5 8.5v8.25a5.5 5.5 0 0 1-11 0V7a3.5 3.5 0 0 1 7 0v9.5a1.5 1.5 0 0 1-3 0V8.5" />
    </>
  )
};

export default Icon;
