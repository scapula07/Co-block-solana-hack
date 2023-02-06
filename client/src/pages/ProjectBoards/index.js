import React ,{useState,useEffect,useMemo} from 'react'
import {FiSearch} from "react-icons/fi"
import {MdOutlineZoomOutMap,MdAdd,MdOutlineDeleteOutline} from "react-icons/md"
import {RiSettings3Fill,RiAttachment2,RiDeleteBin5Line} from "react-icons/ri"
import staff1 from "../../assets/staff1.png"
import staff2 from "../../assets/staff2.png"
import {GrAdd} from "react-icons/gr"
import {AiOutlineStar,AiOutlineLike} from "react-icons/ai"
import {BsGrid,BsListNested,BsFillCalendarEventFill} from "react-icons/bs"
import { useActions } from '../../Hooks/coblocks.utils'
import { useRecoilValue } from 'recoil'
import { TasksState } from '../../recoil/globalState'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TopBar=()=>{

    return(
        <div className='flex items-center space-x-10'>
            <main className='w-2/5'>
            <div className='flex bg-white rounded-md py-2 w-full justify-between  px-2 items-center space-x-2'>
        
                <input 
                placeholder='Search projects or tasks..'
                className='w-3/4 outline-none text-sm'
                />
                <FiSearch className='text-black' />
            </div>
            </main>
            <main className='w-2/5 '>
                <div className='w-full space-x-4 flex text-slate-500 items-center'>
                    <h5 className='text-sm font-semibold'>
                        <span className='text-slate-400'>Group by </span>
                        <select name="status" className='bg-slate-200 outline-none'>
                           <option value="">Status</option>
                            <option value="">New</option>

                       </select>
                    </h5>

                    <h5 className='text-sm font-semibold'>
                        <span  className='text-slate-400'>Show</span>
                        <select name="status" className='bg-slate-200 outline-none'>
                         
                            <option value="">All task without subtasks</option>
                            <option value="">All task without subtasks</option>

                       </select>
                    </h5>
                  

                </div>
            </main>
            <main className='w-1/5'>
                <div className='flex text-slate-500'>
                    <h5 className='flex items-center space-x-4'>
                        <span>Full screen</span>
                        <MdOutlineZoomOutMap />
                        <RiSettings3Fill className='text-xl'/>
                    </h5>

                 


                    
                </div>
                  
            </main>

        </div>
    )
}



const NavTop=()=>{
    
    const [teams,setTeam]=useState([staff1 ,staff2,staff1 ,staff2 ])

    return(
        <div className='w-full flex items-center space-x-10 text-black'>
            <main className='flex w-1/2 justify-between'>
                <h5 className='flex items-center space-x-2' >
                   <span className='text-lg font-semibold'> {"Scapula Board"}</span>
                   <span className='text-xs text-slate-400'>{"125"} Tasks</span>
                    
                </h5>
                 <h5 className='flex items-center space-x-2'>
                    <div className='flex items-center -space-x-1'>
                        {teams.map((team)=>{
                            return(
                              <img src={team}  className="w-6 h-6" />
                            )
                        })

                        }

                    </div>
                    <h5 className='flex items-center space-x-4 '>
                        <span className='bg-slate-400 p-1 text-xs text-slate-200 rounded-full '>
                            {teams?.length}
                        </span>
                        <span className='bg-slate-400 p-1 text-xs text-slate-200 rounded-full '>
                            <MdAdd className='text-xs text-slate-200'/>
                        </span>

                    </h5>
                
                   
                </h5>

            </main>

            <main className="w-1/2 ">
                <div className='flex w-full justify-between'>
                        <div className='flex items-center space-x-4'>
                        <AiOutlineStar className='text-slate-500'/>
                        <button className='bg-blue-400  text-white text-xs px-8 py-1 rounded-md'>
                            New task list
                        </button>

                    </div>

                    <div className='flex'>
                        <button className='flex bg-black items-center space-x-2 px-2 py-1 text-xs text-white rounded-md'>
                            <span>Board</span> 
                            <BsGrid className="text-xs " />
                        </button>

                        <button className='flex bg-white text-slate-500 items-center space-x-2 px-2 py-1 text-xs text-white rounded-md'>
                        <span>List</span> 
                            <BsListNested className="text-xs "  />
                        </button>

                    </div>

                </div>
            

            </main>

        </div>
    )
}




const TitleBar=({name,borderColor,num ,textColor})=>{
    return(
        <div className={`bg-white rounded-md w-full flex justify-between py-1 px-4 border-b-2 ${borderColor}  `}>
            <h5 className={`font-semibold text-xs  ${textColor}`}>{name}</h5>
            <h5 className={`font-semibold text-xs  ${textColor}`}>{num}</h5>

        </div>
    )
 }



const TaskCard=({text,proposer,marked,markDone, pda,idx,removeTask})=>{
    return(
        <div className='w-full flex flex-col bg-white py-4 px-2 items-start space-y-4 rounded-md'>
            <p className='font-semibold text-xs text-slate-400 flex items-center w-full justify-between'>

              {text}

             {marked&&<input type="checkbox" onChange={()=>markDone(pda,idx)}/>} 
            </p>
            <div className='flex w-full justify-between'>
                <main className='flex space-x-2'>
                    <img src={proposer} className="h-4 w-4 rounded-full"/>
                    <h5 className='text-xs text-slate-300'>{"Jan 27"}</h5>
                </main>

                <main className='flex items-center space-x-2'>
                   <h5 className='flex items-center space-x-1 '>
                    <span className='text-xs text-slate-300 '>{"0"}</span>
                     <AiOutlineLike className='text-xs text-slate-300 '/>
                   </h5>
                   <h5 className='flex items-center space-x-1 '>
                        <span className='text-xs text-slate-300 '>{"0"}</span>
                        <RiAttachment2 className='text-xs text-slate-300 '/>
                   </h5>

                   <RiDeleteBin5Line  
                   className='text-sm text-rose-300 font-semibold'
                    onClick={()=>removeTask(pda,idx)}
                   />
                </main>

            </div>


        </div>
    )
}



const TaskSection=({incompleteTasks,completedTasks,addTask,markDone,removeTask})=>{
    
    const [taskDescription,setDescription]=useState("")


    return(
        <div className='w-full py-8'>
            <div className='flex w-full space-x-4'>
                <main className='flex flex-col w-1/4 '>
                    <TitleBar  name={"Open"}  borderColor={"border-red-700"} textColor={"text-red-700"} num={incompleteTasks?.length}/>

                    <div className='flex flex-col space-y-4 py-4'>
                        { incompleteTasks?.map((task)=>{

                            return(
                              <TaskCard 
                              text={task?.account?.description} 
                              proposer={staff1} marked={true} 
                              markDone={markDone} 
                              pda={task?.publicKey} 
                              idx={task?.account?.idx} 
                              removeTask={removeTask}/>
                            )
                        })

                        }

                    </div>

                    <h5 className='flex w-full items-center space-x-1'>
                        <MdAdd className='text-slate-400' onClick={()=>addTask(taskDescription)}/>
                        {/* <span className='text-slate-400 text-xs'>Add new task</span> */}
                        <input placeholder="Add new task" className='w-11/12 text-xs py-0.5 px-1 text-slate-400 rounded-md bg-slate-200'
                           onChange={(e)=>setDescription(e.target.value)}
                        />

                    </h5>
                </main>
                <main className='flex flex-col w-1/4'>
                    <TitleBar  name={"In progress"}  borderColor={"border-blue-400"} textColor={"text-blue-400"} num={"2"}/>

                    <div className='flex flex-col space-y-4 py-4'>
                        {[1,2].map(()=>{

                            return(
                              <TaskCard
                               text={"Lorem ipsum dolor si."} 
                               proposer={staff1}  
                               marked={false}/>
                            )
                        })

                        }

                    </div>

                    <h5 className='flex items-center space-x-1'>
                        <MdAdd className='text-slate-400'/>
                        <input placeholder="Add new task" className='w-11/12 text-xs py-0.5 px-1 text-slate-400 rounded-md bg-slate-200'/>


                    </h5>
                </main>
                <main className='flex flex-col w-1/4'>
                   <TitleBar  name={"Done"}  borderColor={"border-green-700"} textColor={"text-green-700"} num={completedTasks?.length}/>

                   <div className='flex flex-col space-y-4 py-4'>
                        {completedTasks?.map((task)=>{

                            return(
                              <TaskCard 
                                text={task?.account?.description} 
                                proposer={staff1} 
                                marked={false}
                                markDone={markDone} 
                                pda={task?.publicKey} 
                                idx={task?.account?.idx} 
                                removeTask={removeTask}
                              />
                              
                            )
                        })

                        }

                    </div>

                    <h5 className='flex items-center space-x-1'>
                        {/* <MdAdd className='text-slate-400'/> */}
                        {/* <input placeholder="Add new task" className='w-11/12 text-xs py-0.5 px-1 rounded-md bg-slate-200'/> */}


                    </h5>
                </main>
                <main className='flex flex-col w-1/4'>
                  <TitleBar  name={"Ideals"}  borderColor={"border-slate-500"} textColor={"text-slate-500"} num={"4"} marked={false}/>

                  <div className='flex flex-col space-y-4 py-4'>
                        {[1,2,4,5].map(()=>{

                            return(
                              <TaskCard
                               text={"Lorem ipsum dolor si."} 
                               proposer={staff1} />
                            )
                        })

                        }

                    </div>

                    <h5 className='flex items-center space-x-1'>
                        <MdAdd className='text-slate-400'/>
                        <input placeholder="Add new ideals" className='w-11/12 text-xs py-0.5 px-1 text-slate-400 rounded-md bg-slate-200'/>


                    </h5>
                </main>

            </div>

        </div>
    )
}

const Event=({evt})=>{

    return(
        <div className='flex w-full items-center justify-between' >
            <main className='flex flex-col'>
                <h5 className='text-sm font-semibold text-slate-600'>{evt?.eventName}</h5>
                <h5 className='text-xs font-semibold text-slate-300'>{evt?.time}</h5>

            </main>
            <main className='flex items-center space-x-4'>
                <span className='bg-slate-400 p-1 text-xs text-slate-200 rounded-full '>
                    <MdAdd className='text-xs text-slate-100'/>

                  
                </span>

                <div className='flex items-center -space-x-1'>
                        {evt.team.map((team)=>{
                            return(
                              <img src={team}  className="w-6 h-6" />
                            )
                        })

                        }

                    </div>

            </main>

        </div>
    )
}
export default function Boards() {
    const {initializeUser ,getAllTask,addTask,markDone,removeTask} = useActions()
    const tasks =useRecoilValue(TasksState)


    useEffect(()=>{
        getAllTask()
    },[])

    const incompleteTasks = useMemo(() => tasks?.filter((task) => !task?.account?.done), [tasks])
    const completedTasks = useMemo(() => tasks?.filter((task) => task?.account?.done), [tasks])
    
    const [startDate, setStartDate] = useState(new Date());

    console.log( incompleteTasks,"incomplete")
    console.log(completedTasks,"complete")
    
    console.log(tasks,"tasks,board")
  return (
    <div className='px-2 '>
       <TopBar />

       <div className='flex py-20 space-x-5'>
         <div className='w-3/4'>
              <NavTop />
              <TaskSection incompleteTasks={incompleteTasks} completedTasks={completedTasks} addTask={addTask} markDone={markDone} removeTask={removeTask}/>
         </div>

            <div className='flex flex-col text-black w-4/12 px-4 '>
                <div className='flex w-full py-8 justify-start'>
                <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                 style={{width:"100%"}}
                />
                </div>
                <div className='w-full bg-white rounded-md px-4 py-4 space-y-4 w-full flex flex-col items-start '>

                    <h5 className='text-lg font-semibold'>Today's Event</h5>

                    <main className='flex flex-col space-y-4 w-full'>
                       {events.map((evt)=>{

                          return(
                            <Event evt={evt} />
                          )
                       })

                       }
                    </main>

                    <main className='flex justify-center items-center w-full space-x-2 py-4'>
                        <BsFillCalendarEventFill className='text-sm text-slate-400' />
                        <h5 className='text-sm text-slate-400'>New events</h5>


                    </main>

                </div>
            </div>

       </div>
    
    </div>
  )
}



const events=[
    {
        eventName:"Design meeting",
        time:"9:00pm -10:00pm",
        team:[staff1 ,staff2,staff1 ,staff2 ]
    },
    {
        eventName:"Design meeting",
        time:"9:00pm -10:00pm",
        team:[staff1 ,staff2,staff1 ,staff2 ]
       
    }

]