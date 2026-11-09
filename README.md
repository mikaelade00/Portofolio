# Portfolio — Mikael Ade Krisna Respati

Personal portfolio site: machine learning research (beamforming & localization for 6G), LLM agents, web apps and embedded hardware.

Plain HTML, CSS and JavaScript with no build step, so it can be served by GitHub Pages or any static host.

## Structure

- `index.html` — home page: hero, about, experience, publications, skills, projects, contact
- `*.html` — project case studies (`adaptive_filter`, `MTL`, `langchain`, `latex_translator`, `pcb_designs`); `AI-agent.html` redirects to `langchain.html`
- `assets/css/style.css` — styles with dark and light themes
- `assets/js/script.js` — theme toggle, mobile menu, scroll spy, project filter, figure lightbox
- `CV_Mikael.pdf` — downloadable CV

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
