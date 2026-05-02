# Youth Collective — Project Structure

This folder is organized as a clean static website using vanilla HTML, CSS, and JavaScript.

```bash
youth-collective/
├── index.html
├── events.html
├── gallery.html
├── team.html
├── future.html
├── contact.html
├── README.md
├── PROJECT_STRUCTURE.md
├── css/
│   ├── style.css
│   ├── home.css
│   ├── events.css
│   ├── gallery.css
│   ├── team.css
│   ├── future.css
│   └── contact.css
├── js/
│   ├── navigation.js
│   ├── animations.js
│   ├── main.js
│   ├── events.js
│   └── gallery.js
├── assets/
│   ├── logos/
│   │   ├── youth-collective-logo.png
│   │   └── youth-collective-logo.svg
│   ├── images/
│   │   ├── cleanup.svg
│   │   ├── community.svg
│   │   ├── outdoor.svg
│   │   ├── run.svg
│   │   └── gallery/
│   │       ├── cleanup-day.svg
│   │       ├── outdoor-circle.svg
│   │       ├── run-day.svg
│   │       ├── seaside-action.svg
│   │       ├── team-planning.svg
│   │       └── volunteer-moment.svg
│   └── icons/
└── docs/
```

## Notes before editing

- Shared/global styles are in `css/style.css`.
- Page-specific styles are separated by page: `home.css`, `events.css`, `gallery.css`, `team.css`, `future.css`, and `contact.css`.
- Shared navigation behavior is in `js/navigation.js`.
- Scroll reveal animations are in `js/animations.js`.
- Home/contact counters and local form demo behavior are in `js/main.js`.
- Event filter behavior is in `js/events.js`.
- Gallery filter and browser-only preview behavior are in `js/gallery.js`.
- Logos belong in `assets/logos/`.
- Main illustrations belong in `assets/images/`.
- Gallery photos belong in `assets/images/gallery/`.
