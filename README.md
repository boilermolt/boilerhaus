# boilerhaus

Personal brand website with Next.js, TypeScript, shadcn/ui, and Web3 integration.

## Features

- 🚀 Next.js 14+ with App Router
- 🔐 Web3 wallet integration (RainbowKit + wagmi)
- 📝 Substack blog integration
- 💰 Token swap ready (Base Chain)
- 🎨 shadcn/ui components + Tailwind CSS

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Get a WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com) and add it to `.env.local`:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Configuration

### Site Settings

Edit `lib/config.ts` to customize:
- Site name and description
- Social links (Twitter, GitHub, Substack)
- Navigation menu

### Substack Feed

Your Substack RSS feed is already configured in `.env.local`:
```
NEXT_PUBLIC_SUBSTACK_FEED_URL=https://boiler.substack.com/feed
```

### Token Swap (Base Chain)

Your creator token is configured:
```
NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS=0xda3ac4d10f272fe2a30b21843e0fb58b0b56a6e6
NEXT_PUBLIC_CHAIN_ID=8453
```

To add the swap widget, see the Token Swap reference in the skill documentation.

## Customization

### Pages

- `app/page.tsx` - Home page
- `app/about/page.tsx` - About/bio
- `app/portfolio/page.tsx` - Projects
- `app/blog/page.tsx` - Substack blog feed
- `app/contact/page.tsx` - Contact form
- `app/resume/page.tsx` - Resume/CV
- `app/case-studies/page.tsx` - Case studies

### Styling

- `app/globals.css` - Global styles and theme
- `components/ui/*` - shadcn/ui components
- Modify Tailwind colors in `app/globals.css` CSS variables

### Brand Assets

Replace `public/images/avatar.jpg` with your own avatar/logo.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
4. Deploy!

### Environment Variables for Production

- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` - WalletConnect project ID (required)
- `NEXT_PUBLIC_SITE_URL` - Your production domain
- All other variables in `.env.local` work as-is

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Web3**: RainbowKit + wagmi + viem
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Next Steps

1. ✅ Get WalletConnect Project ID
2. Update `app/about/page.tsx` with your bio
3. Add projects to `app/portfolio/page.tsx`
4. Customize social links in `lib/config.ts`
5. Replace placeholder content across pages
6. Add token swap widget (optional)
7. Deploy to Vercel

## Support

Created with the **personal-brand-site** Moltbot skill.

- Skill repo: https://github.com/boilermolt/personal-brand-site
- Moltbot docs: https://docs.molt.bot
