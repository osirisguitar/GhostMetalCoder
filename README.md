# METAL CODER

Ghost theme for https://www.heavymetalcoder.com

Based on [Casper](https://github.com/TryGhost/Casper) by the Ghost Foundation (MIT licensed).

## What's customized

All site-specific styling is in section **13. Metal Coder customizations** at the end of `assets/css/screen.css`. Template changes are kept small:

- `default.hbs`: the publication cover image as a full-page fixed background, Open Sans, Google Tag Manager (loaded from `assets/js/head/gtm.js` so no inline script is needed), and the background image credit in the footer
- `index.hbs`: the cover image isn't rendered as a separate header image
- `post.hbs`: an author box below each post
- `package.json`: 20 posts per page, and sans-serif body text by default
- `assets/fonts/`: Ailerons, the logo font

Comments use Ghost's built-in commenting (Ghost Admin → Settings → Membership → Commenting).

## Development

You need [Node](https://nodejs.org/) and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev      # build and watch for changes
pnpm test     # build a zip in dist/ and validate it with gscan
pnpm zip      # build dist/ghost-metal-coder.zip for upload
```

Built assets in `assets/built/` are committed, so rebuild before committing CSS/JS changes.

## Pulling in new Casper releases

```bash
git remote add upstream https://github.com/TryGhost/Casper.git   # once
git fetch upstream tag v5.x.y --no-tags   # the Casper release to merge
git merge v5.x.y
pnpm install && pnpm zip    # rebuild assets/built/ and resolve conflicts there by rebuilding
```

## Copyright & License

Casper: Copyright (c) 2013-2026 Ghost Foundation, released under the [MIT license](LICENSE).
Metal Coder customizations: Copyright (c) Anders Norrback Bornholm.
