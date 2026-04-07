declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}


// I've added a global TypeScript declarations file (global.d.ts) 
// to tell the TypeScript language server exactly how to handle .css file imports.
// When Next.js runs, it uses Webpack or Turbopack which inherently understands CSS 
// files. However, the exact configuration of the TypeScript compiler running inside 
// VS Code sometimes requires this manual definition to explicitly tell it that CSS 
// imports are safe side-effects.