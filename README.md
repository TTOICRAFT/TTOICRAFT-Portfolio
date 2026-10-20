# Owolabi Israel - Data Analyst Portfolio

Personal portfolio website for **Owolabi Israel**, a data analyst and Mechanical Engineering graduate. The site presents selected analytics projects, tools, ways of working, and contact options.

**Live site:** [owolabi-portfolio.vercel.app](https://owolabi-portfolio.vercel.app/)

## Features

- Responsive portfolio built with React and Vite.
- Animated introduction and section transitions, with reduced-motion support.
- Six featured data analytics projects with GitHub repositories, dashboard links where available, and optimized WebP cover images.
- Skills and toolkit covering SQL, Python, Power BI, Tableau, relational databases, and cloud data platforms.
- Contact form, email, and WhatsApp links.
- A resume page with separate downloads for the one-page resume and the full CV.
- Vercel deployment configuration with a serverless contact endpoint.

The project cover images served by the site are in `client/public/projects/`. Their original PNG files are preserved in `docs/source-assets/project-covers/`.

## Tech stack

- **Frontend:** React 18, Vite 6, Tailwind CSS 3
- **Motion and visuals:** Framer Motion, Three.js, Lucide icons
- **Local contact API:** Express and Nodemailer
- **Hosted contact API:** Vercel serverless function
- **Hosting:** Vercel

## Run locally

Requirements: Node.js 18 or newer and npm.

From the repository root:

```bash
npm install
npm run dev
```

The Vite site runs at <http://localhost:5173> and the local Express API runs at <http://localhost:3001>. The site can be viewed without email credentials; configure SMTP to make the contact form send email.

### Contact form email settings

Create `server/.env` for local development and set:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
MAIL_TO=destination@example.com
```

For Gmail, use an App Password rather than your account password. The `.env` file is ignored by Git. On Vercel, add the SMTP variables in the project's environment settings; `MAIL_TO` is optional and defaults to `SMTP_USER`.

## Build and deploy

Build the frontend locally:

```bash
npm run build
```

For Vercel, the repository's `vercel.json` runs `npm run vercel-build`, publishes the generated `dist` directory, and routes `/api/contact` to the serverless function in `api/`. Add the SMTP environment variables in Vercel before enabling email delivery.

## Project structure

```text
.
|-- api/
|   `-- contact.mjs                 # Vercel contact form function
|-- client/
|   |-- public/
|   |   |-- projects/               # Optimized project cover images
|   |   |-- resume.pdf
|   |   |-- cv.pdf
|   |   `-- resume.png              # One-page resume preview
|   `-- src/
|       |-- data/projects.js        # Project details and links
|       |-- pages/Resume.jsx        # Resume and CV downloads
|       `-- sections/               # Portfolio page sections
|-- docs/
|   `-- source-assets/project-covers/ # Original project cover PNGs
|-- server/
|   |-- email-service.js            # SMTP email transport
|   `-- server.js                   # Local Express API and static server
|-- package.json                    # npm workspaces and root scripts
`-- vercel.json                     # Vercel build and routing configuration
```

## Contact

- **Email:** [owolabioluwatimilehinisrael01@gmail.com](mailto:owolabioluwatimilehinisrael01@gmail.com)
- **LinkedIn:** [linkedin.com/in/owolabi-israel](https://www.linkedin.com/in/owolabi-israel/)
- **GitHub:** [github.com/TTOICRAFT](https://github.com/TTOICRAFT)
- **WhatsApp:** [Message Owolabi](https://wa.link/a8jjqu)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
