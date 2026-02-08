'use client'

import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base, mainnet } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_SITE_NAME || 'boilerhaus',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  chains: [base, mainnet],
  ssr: true,
})
