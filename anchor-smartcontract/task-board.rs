use anchor_lang::prelude::*;

// pub mod constant;
// pub mod error;
// pub mod states;
// use crate::{constant::*, error::*, states::*};

declare_id!("CJK7mK6KtpuZYvtnJiG48Ek6CwM7WNNuYza268nDXn54");

#[constant]
pub const STAFF_TAG: &[u8] = b"STAFF_STATE";

#[constant]
pub const TASK_TAG: &[u8] = b"TASK_STATE";


#[error_code]
pub enum TaskError {
    #[msg("You are not authorized to perform this action.")]
    Unauthorized,
    #[msg("Not allowed")]
    NotAllowed,
    #[msg("Math operation overflow")]
    MathOverflow,
    #[msg("Already marked")]
    AlreadyMarked,
}

#[account]
#[derive(Default)]
pub struct StaffProfile {
    pub authority: Pubkey,
    pub last_task: u8,
    pub task_count: u8
}

#[account]
#[derive(Default)]
pub struct TaskAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub description: String,
    pub done: bool,
}


#[program]


pub mod co_block {
    use super::*;

       pub fn initialize_staff(
        ctx: Context<InitializeStaff>
    ) -> Result<()> {
        // Initialize user profile with default data
        let staff_profile = &mut ctx.accounts.staff_profile;
        staff_profile.authority = ctx.accounts.authority.key();
        staff_profile.last_task = 0;
        staff_profile.task_count = 0;

        Ok(())
    }

        pub fn add_task(ctx: Context<AddTask>, _description: String) -> Result<()> {
        let task_account = &mut ctx.accounts.task_account;
        let staff_profile = &mut ctx.accounts.staff_profile;

        // Fill contents with argument
        task_account.authority = ctx.accounts.authority.key();
        task_account.idx = staff_profile.last_task;
        task_account.description= _description;
        task_account.done = false;

        // Increase todo idx for PDA
        staff_profile.last_task= staff_profile.last_task
            .checked_add(1)
            .unwrap();

        // Increase total todo count
        staff_profile.task_count = staff_profile.task_count
            .checked_add(1)
            .unwrap();

        Ok(())
    }


   pub fn mark_done(ctx: Context<MarkDone>, task_idx: u8) -> Result<()> {
      let task_account = &mut ctx.accounts.task_account;
      require!(!task_account.done, TaskError::AlreadyMarked);

    // Mark todo
     task_account.done = true;
      Ok(())
     }


    pub fn remove_task(ctx: Context<RemoveTodo>, task_idx: u8) -> Result<()> {
        // Decreate total todo count
        let  staff_profile = &mut ctx.accounts.staff_profile;
         staff_profile.task_count=  staff_profile.task_count
            .checked_sub(1)
            .unwrap();

        // No need to decrease last todo idx

        // Todo PDA already closed in context

        Ok(())
    }
}


#[derive(Accounts)]
#[instruction()]
pub struct InitializeStaff<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [STAFF_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<StaffProfile>(),
    )]
    pub staff_profile: Box<Account<'info, StaffProfile>>,

    pub system_program: Program<'info, System>,
}




#[derive(Accounts)]
#[instruction()]
pub struct AddTask<'info> {
    #[account(
        mut,
        seeds = [STAFF_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
  pub staff_profile: Box<Account<'info, StaffProfile>>,

    #[account(
        init,
        seeds = [TASK_TAG, authority.key().as_ref(), &[staff_profile.last_task as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<TaskAccount>() + 8,
    )]
    pub task_account: Box<Account<'info, TaskAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}


#[derive(Accounts)]
#[instruction(task_idx: u8)]
pub struct MarkDone<'info> {
    #[account(
        mut,
        seeds = [STAFF_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
pub staff_profile: Box<Account<'info, StaffProfile>>,


    #[account(
        mut,
        seeds = [TASK_TAG, authority.key().as_ref(), &[task_idx].as_ref()],
        bump,
        has_one = authority,
    )]
   pub task_account: Box<Account<'info, TaskAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}



#[derive(Accounts)]
#[instruction(task_idx: u8)]
pub struct RemoveTodo<'info> {
    #[account(
        mut,
        seeds = [STAFF_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
  pub staff_profile: Box<Account<'info, StaffProfile>>,


    #[account(
        mut,
        close = authority,
        seeds = [TASK_TAG, authority.key().as_ref(), &[task_idx].as_ref()],
        bump,
        has_one = authority,
    )]
    pub task_account: Box<Account<'info, TaskAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}