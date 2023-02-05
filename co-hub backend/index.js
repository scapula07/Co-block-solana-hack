const web3 = require('@solana/web3.js');
const { SystemProgram }= require('@solana/web3.js');
const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
const { createMint,getMint,getOrCreateAssociatedTokenAccount,getAccount,mintTo,transfer } = require('@solana/spl-token') 
const bip39 =require('bip39') ;
const anchor = require("@project-serum/anchor");
const { utf8 } =require('@project-serum/anchor/dist/cjs/utils/bytes')
const coBlockprogramIdl=require("./programIdl.json")
const  { findProgramAddressSync } =require('@project-serum/anchor/dist/cjs/utils/pubkey') 
const cron = require('node-cron');


const  { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL} = require('@solana/web3.js');



const mnemonic ="Picture state flush snack alpha armed quarter jazz fringe bag nominee joy"
const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
const payer = Keypair.fromSeed(seed.slice(0, 32));
const mintAuthority = payer
const freezeAuthority =payer

const coblockTokenAddress="BddAVhMHDUJ4e61RytAPQJ8s5DVyuBSGF8mTwwQpLfLm"
const tokenAccountAddress="DC4Tk5pux64c9smgCAfbpuSCovYtsxLVwekZ2jBmZ79H"

let mintPublickKey = new web3.PublicKey(
    coblockTokenAddress
  );

  let tokenAcctPublickKey = new web3.PublicKey(
    tokenAccountAddress
  );


const COBLOCK_PROGRAM_PUBKEY = new web3.PublicKey("CJK7mK6KtpuZYvtnJiG48Ek6CwM7WNNuYza268nDXn54");
const provider = new anchor.AnchorProvider(connection, payer, anchor.AnchorProvider.defaultOptions())
const program=new anchor.Program(coBlockprogramIdl, COBLOCK_PROGRAM_PUBKEY, provider)
        
      
       
const rewardDevs=async()=>{


     try{

         
         
          const tokenAccountInfo = await getAccount(
            connection,
            tokenAcctPublickKey
          )

          console.log(tokenAccountInfo,"info")

          const devAccounts = await program.account.staffProfile.all()

          devAccounts.forEach( async (account)=>{
            console.log(account)
            console.log(account.account?.authority,"devAcc")
            console.log(account.account?.authority.toBase58(),"devAcc")

            if(account.account?.taskCount < 1) return console.log("No task done");
            const devTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                payer, 
                mintPublickKey, 
                account.account?.authority
                );

                console.log(devTokenAccount,"devTokenAcc")

               const signature = await transfer(
                    connection,
                    payer,
                    tokenAccountInfo.address,
                    devTokenAccount.address,
                    payer.publicKey,
                    50
                );
             

                console.log("Transaction signature ",signature,)
                console.log("Paid ")

          });
         
     }catch(e){
        console.log(e)
     }


}





const mintToAccount=async()=>{


    try{

     

          const resMin= await mintTo(
            connection,
            payer,
            mintPublickKey,
            tokenAcctPublickKey,
            mintAuthority,
            100000000000 // because decimals for the mint are set to 9 
          )

          const tokenAccountInfo = await getAccount(
            connection,
            tokenAcctPublickKey
          )

          console.log(tokenAccountInfo.amount);

    }catch(e){
        console.log(e)
    }
}


cron.schedule('* * * * *', () => {
    console.log('Sending rewards to devs');

    rewardDevs()
  });


cron.schedule('* * * * *', () => {
    console.log('Minting to mint Authority Account');

    mintToAccount()
  });
