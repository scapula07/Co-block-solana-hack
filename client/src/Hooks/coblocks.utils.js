import * as anchor from '@project-serum/anchor'
import { useEffect, useMemo, useState } from 'react'
import { PublicKey } from "@solana/web3.js";
import coBlockIdl from "../IDL/coblock.json"
import { SystemProgram } from '@solana/web3.js'
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes'
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { devFilter } from '../utils';
import {TasksState } from "../recoil/globalState"
import { useRecoilState } from 'recoil';

const COBLOCK_PROGRAM_PUBKEY = new PublicKey("CJK7mK6KtpuZYvtnJiG48Ek6CwM7WNNuYza268nDXn54");

export function useActions() {
    

    const { connection } = useConnection()
    const { publicKey } = useWallet()
    const anchorWallet = useAnchorWallet()
  
    const [lastTask, setLastTask] = useState(0)
    const [task,setTasks] =useRecoilState(TasksState)
    const [myTasks,setMyTask]=useState([])
    const [initialized, setInitialized] = useState(false)


    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())
            return new anchor.Program(coBlockIdl, COBLOCK_PROGRAM_PUBKEY, provider)
        }
    }, [connection, anchorWallet])




   

        const findDevAccounts = async () => {
            try {
                const [devPda, devBump] =await findProgramAddressSync([utf8?.encode('STAFF_STATE'), publicKey?.toBuffer()], program?.programId)
                const devAccount = await program?.account?.staffProfile?.fetch(devPda)

                console.log(devAccount)

                if (devAccount) {
                    setLastTask(devAccount?.lastTask)
                    setInitialized(true)
                       

                    const taskAccounts = await program?.account?.taskAccount?.all([devFilter(publicKey.toString())])
                    setMyTask(taskAccounts)
                    console.log(taskAccounts,"taskAccounts")
                }else{
                    setMyTask([])
                    setInitialized(false)
                }

            }catch(e){
                console.log(e)
                setMyTask([])

            }
        }
   

   
     const getAllTask=async()=>{
        const taskAccounts = await program?.account?.taskAccount.all()
        console.log(taskAccounts)
        setTasks(taskAccounts)
     }

    const initializeUser = async () => {
        
        try{
            const [devPda, devBump] = findProgramAddressSync([utf8?.encode('STAFF_STATE'), publicKey?.toBuffer()], program?.programId)
            console.log(devPda,"devpds")
            console.log(publicKey,"publick")
            const tx = await program?.methods
            ?.initializeStaff()
            ?.accounts({
                staffProfile: devPda,
                authority: publicKey,
                systemProgram: SystemProgram?.programId,
            })
            ?.rpc()

            console.log(tx,"txxxxxx")
        }catch(e){
            console.log(e)
        }

    }

    const addTask = async (description) => {
        try {
                const [devPda,devBump] = findProgramAddressSync([utf8?.encode('STAFF_STATE'), publicKey?.toBuffer()], program?.programId)
                const [taskPda, taskBump] = findProgramAddressSync([utf8?.encode('TASK_STATE'), publicKey?.toBuffer(), Uint8Array.from([lastTask])], program?.programId)

                const res=     await program?.methods
                .addTask(description)
                .accounts({
                    staffProfile: devPda,
                    taskAccount: taskPda,
                    authority: publicKey,
                    systemProgram: SystemProgram.programId,
                })
                .rpc()

                console.log(res,"ress")

        }catch(e){
            console.log(e)
        }
        
    }

    const markDone = async (taskPda, taskIdx)=>  {
           
        try{

            const [devPda,devBump] = findProgramAddressSync([utf8?.encode('STAFF_STATE'), publicKey?.toBuffer()], program?.programId)
            
       const res=     await program?.methods
            .markDone(taskIdx)
            .accounts({
                staffProfile: devPda,
                taskAccount: taskPda,
                authority: publicKey,
                systemProgram: SystemProgram.programId,
            })
            .rpc()
       console.log(res,"ress")
        }catch(e){
            console.log(e)
        }
    }
  

    const removeTask = async (taskPda, taskIdx) => {
         

        try{

            const [devPda,devBump] = findProgramAddressSync([utf8.encode('STAFF_STATE'), publicKey.toBuffer()], program.programId)
            
            await program.methods
            .removeTodo(taskIdx)
            .accounts({
                staffProfile: devPda,
                taskAccount: taskPda,
                authority: publicKey,
                systemProgram: SystemProgram.programId,
            })
            .rpc()


        }catch(e){
            console.log(e)
        }
    }

    return {  initializeUser, addTask,markDone, removeTask ,getAllTask,findDevAccounts,myTasks, initialized}
}

