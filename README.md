# Figma New File Setup

Automate the several steps of setting up a new Figma File from a tempalte. This plugin currently acheives the following: 

- Renames "Page 1" to "Cover"
- Inserts a thumbnail image from a shared Figma library
  - Configuring your own cover image is possible by editing the `coverKey` variablein the `code.ts` file
- Sets the thumbnail image as the cover for the current file
- Adds a set of configurable pages with specificed page names.
  - Configuring your own pages is possible by editing the `FigmaPages` variable in the `code.ts` file
