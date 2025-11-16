# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

🌐 **Live Site:** [www.bhagya-lakshan.me](https://www.bhagya-lakshan.me)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **Components:** Radix UI, shadcn/ui
- **Analytics:** Vercel Analytics
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js >= 20.9.0
- pnpm (install with `npm install -g pnpm`)

### Development

```powershell
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```powershell
# Create production build
pnpm build

# Preview production build locally
pnpm start
```

## Deployment Options

### 🚀 Option 1: Vercel (Recommended)

**Best for:** Zero-config, instant deploys, serverless

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Auto-detects Next.js, no config needed
4. Custom domain: Add `www.bhagya-lakshan.me` in Vercel dashboard

**One-click deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bhagyalakshan/Myportfolio)

---

### 🎯 Option 2: GitHub Pages (Current Setup)

Already configured! Deploys automatically on push to `main`.

**Manual deployment:**

```powershell
pnpm deploy
```

**Setup (if starting fresh):**

1. Enable GitHub Pages in repo settings
2. Set source to "GitHub Actions"
3. Push - the `.github/workflows/deploy.yml` workflow will auto-deploy

---

### 🌊 Option 3: Netlify

**Best for:** Form handling, serverless functions, split testing

1. Connect GitHub repo at [netlify.com](https://netlify.com)
2. Netlify auto-detects settings from `netlify.toml`
3. Deploy!

**One-click deploy:**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bhagyalakshan/Myportfolio)

---

### 🐳 Option 4: Docker (Self-hosted / Cloud Run / AWS ECS)

**Build and run:**

```powershell
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

**Deploy to Google Cloud Run:**

```powershell
gcloud run deploy portfolio `
  --source . `
  --region us-central1 `
  --allow-unauthenticated
```

**Deploy to AWS ECS/Fargate:**

```powershell
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest

# Deploy via ECS console or CLI
```

---

### ☁️ Option 5: Azure Static Web Apps

```powershell
# Install Azure CLI
winget install Microsoft.AzureCLI

# Login and deploy
az login
az staticwebapp create `
  --name my-portfolio `
  --resource-group my-rg `
  --source https://github.com/bhagyalakshan/Myportfolio `
  --location eastus2 `
  --branch main `
  --app-location "/" `
  --output-location "out"
```

---

### 🔥 Option 6: Firebase Hosting

```powershell
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
firebase login
firebase init hosting

# Deploy
pnpm build
firebase deploy --only hosting
```

---

## Performance Optimization

✅ Static export for maximum speed  
✅ Security headers configured  
✅ Gzip compression (Docker/Netlify)  
✅ Asset caching with immutable headers  
✅ Turbopack for faster builds  
✅ Image optimization with Next.js Image

## Custom Domain Setup

Your custom domain `www.bhagya-lakshan.me` is already configured via `public/CNAME`.

**For other platforms:**
- **Vercel/Netlify:** Add custom domain in dashboard
- **Docker/Cloud:** Configure DNS A/CNAME records to point to deployment IP/hostname

## Environment Variables

No secrets required for this static site. Vercel Analytics works automatically when deployed to Vercel.

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── *.tsx           # Page sections (hero, about, projects, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utilities
├── public/             # Static assets
├── styles/             # Global styles
└── next.config.mjs     # Next.js configuration
```

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Installs dependencies with pnpm
- Builds the project
- Deploys to GitHub Pages

## Troubleshooting

**Build errors:**
```powershell
# Clear cache and rebuild
Remove-Item -Recurse -Force .next, out, node_modules
pnpm install
pnpm build
```

**Lockfile warnings:** Fixed by setting `turbopack.root` in `next.config.mjs`

## License

MIT

## Author

Bhagya Lakshan
- Website: [www.bhagya-lakshan.me](https://www.bhagya-lakshan.me)
- GitHub: [@bhagyalakshan](https://github.com/bhagyalakshan)
