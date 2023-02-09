# CO-BLOCK


Co-block is a platform to find contributors(developers,Ui/Ux developers etc) on open source web3 projects.The platform makes it easy for open source projects to interest developers to join their team.
Developers on the platform earn the platform token after completing team tasks.




![openpoll](https://firebasestorage.googleapis.com/v0/b/coblock-c4473.appspot.com/o/Screen%20Shot%202023-02-09%20at%205.46.49%20PM.png?alt=media&token=f36d1006-ae48-47f7-8137-568ec120fd3d)


## Table of contents

1. Project description
1. Technologies
1. Dapp Architecture and features
1. Details on implementation of hackathon challanges 



### Project description


CO-BLOCK was built with the sole intention of been the one ecosystem to encourage team colloraboration on open source web3 projects.
The platform incentivise developers based on the number of tasks they have completed on teams they joined.

Co-block has most features built in it to support team colloraboration and better communication experience e.g task board,video conferencing ,event planner,reminders,payroll manager etc.



###  Technologies 

1. Reactjs 
1. Rusts and Anchor program
1. Solana web3 js
1. Firebase



###  Dapp Architecture 


Co-block has the following:

- Backend -nodejs script
- Client - reactjs
- Smart contract - Rust and Anchor



## Smart contract - Anchor program

Co-block smart contract is written in Rust using the Anchor program. The contract manages the task by enabling a user add,mark as done and delete a task on chain.


Source code
 [task board smart contract file](https://github.com/scapula07/Co-block-solana-hack/blob/master/anchor-smartcontract/task-board.rs)
 
 
 ## Backend -nodejs script
 
 The backend is a script that runs on a cron schedular . It has 2 functions.
 
 1. A Mint Function: mint platform token to the mint authority account
 1. A reward function : that transfers token to a developer account when it complete certain umber of tasks .
 
 
  [ Source code](https://github.com/scapula07/Co-block-solana-hack/blob/master/%20backend/index.js)
  
  
  
  ## Client - reactjs and solana/web3js
  
  Our frontend includes the following features
  
  1. Task management board
  1. Video conferencing 
  1. Reminder and event planner
  
  
  
  ### Task management board
  
  This part of our dapp consumes some functions definded in our custom hook
  
  
  Source code:
  
  [Hook file ](https://github.com/scapula07/Co-block-solana-hack/blob/master/client/src/Hooks/coblocks.utils.js)
  
  [taskboard file ](https://github.com/scapula07/Co-block-solana-hack/blob/master/client/src/pages/ProjectBoards/index.js)
  
  
  

  
  
 
 


