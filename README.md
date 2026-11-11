# Vintage Birthday Scrapbook

A flip-through digital scrapbook. Open `index.html` in a browser, no build step or server needed
(Google Fonts load from the internet; the book still works offline with fallback fonts).

## Structure

```
vintage-birthday-scrapbook/
├── index.html                 Page markup (9 spreads, each commented)
├── css/
│   ├── variables.css          Colours and font stacks
│   ├── base.css               Reset, body background, safe-area padding
│   ├── book.css               Stage, leaves, pages, binding holes, page corners
│   ├── surfaces.css           Linen, paper, dots, plaid, lined-paper backgrounds
│   ├── typography.css         Headings, handwriting/script fonts, editable text
│   ├── components.css         Photos, polaroids, film strips, notes, stars, tape
│   ├── illustrations.css      Sticker classes (.i-bow, .i-seal, ...) -> assets/images
│   └── ui.css                 Back/next buttons, hint text, reduced motion
├── js/
│   ├── aging.js               Adds the aged-paper overlay to every page
│   ├── flipbook.js            Page turning (buttons, arrows, page corners)
│   └── responsive-scale.js    Fits the book to the window
└── assets/
    ├── images/                33 WebP stickers (bow, seal, roses, ...)
    └── textures/              paper-grain.svg, photo-placeholder.svg
```

## Customising

- **Name:** click any "Name" on the pages and type.
- **Photos:** photo frames show the image configured in `.photo` in `css/components.css`. To use another image, put it in `assets/images/` and update that rule's image URL.
- **Text:** edit the copy directly in `index.html`.
- **Colours / fonts:** change the values in `css/variables.css`.
- **Add a sticker:** drop a `.webp` in `assets/images/` and add a `.i-yourname` rule in `css/illustrations.css`,
  then use `<i class="im i-yourname" style="left:..;top:..;width:.."></i>` on a page.

Note: the stickers `paper`, `label`, `polas` and `crumple` are defined but not used on any page.
