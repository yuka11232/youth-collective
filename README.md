# Youth Collective Website

A Cornell-style vanilla HTML/CSS/JavaScript website for **Youth Collective**, a youth-led initiative in Azerbaijan focused on ecology, sport, health, outdoor activity, youth engagement, and community well-being.

## Pages

- `index.html` — Home page with mission, focus areas, impact counters, and activity previews.
- `events.html` — Activities/events page with filterable event cards and map placeholder.
- `team.html` — Team structure, roles, values, and placeholder member cards.
- `future.html` — Vision page with roadmap, future ideas, and evidence tracking.
- `contact.html` — Join/contact page with a front-end interest form.

## Folder structure

```bash
youth-collective/
├── index.html
├── events.html
├── team.html
├── future.html
├── contact.html
├── css/
│   ├── style.css
│   ├── home.css
│   ├── events.css
│   ├── team.css
│   ├── future.css
│   └── contact.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── events.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
└── README.md
```

## How to run

Open `index.html` in a browser. No build step is required.

## How to edit

- Replace SVG illustrations in `assets/images/` with real photos after events.
- Replace placeholder team cards in `team.html` with real names, photos, and roles.
- Change event details in `events.html` as new activities are planned.
- Connect the contact form to a service such as Google Forms, Formspree, or a custom backend when ready.

## Design direction

The site uses a warm, minimal palette inspired by summer light, greenery, sea, stone, public space, movement, and youth energy. It is intended to feel serious, structured, community-centered, and portfolio-worthy without becoming corporate or childish.


## Activity Gallery

The site includes `gallery.html`, a dedicated page for Youth Collective activity photos. It has category filters, placeholder gallery cards, and a local browser-only upload preview.

For a public static website, copy real photos into `assets/images/gallery/` and update the image paths in `gallery.html`. The local preview does not permanently save files because this version uses only HTML, CSS, and JavaScript.


## Logo and home interactions

The navbar uses `assets/logos/youth-collective-logo.png` as the visible brand mark. The home page also includes lightweight JavaScript interactions in `js/main.js`: a pointer-follow glow/parallax hero effect and subtle card tilt effects. These effects respect reduced-motion settings.
