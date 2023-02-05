import React,{ useMemo }  from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'


export default function ConnectWallet() {
   
   


  return (
    <div className='bg-blue-400 px-4 rounded-md text-xs py-3 text-white ' 
      
       >
         Connect wallet
      </div>
  )
}
