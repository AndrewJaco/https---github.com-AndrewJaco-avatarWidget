import { useState } from 'react'
import { Popover } from '@headlessui/react'
import './App.css'
import classNames from "classnames";

import * as SVG from './assets/svg/index.jsx'

function Calendar_Widget() {
  const [ mode , setMode ] = useState("calendar")
  const [ currentDate, setCurrentDate ] = useState({
    date: 12,
    month: 3,
    year: 1978,
    index: 6
  })
  const [ dateSelected, setDateSelected ] = useState({string:""})
  
  function closeSelector() {
    setMode("calendar")
  }

  const days = ["S", "M", "T", "W", "T", "F", "S"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  const years = Array(120).fill().map((_v,i)=>i+(new Date().getFullYear()-119)); 
  let arrayOfYears = [] 
  for (var i=0; i<years.length; i+=12) {
    arrayOfYears.push(years.slice(i,i+12));
  }
  
  const getAdjustedDates = (year, month) => {
    const getNumberOfDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate()
    }
    const arrayOfDates = Array(getNumberOfDaysInMonth(year, month)).fill().map((v, i)=> {
      return {
        "month": month,
        "year": year,
        "date": i + 1}})
    const firstDay = new Date(year, month, 0).getDay()
    let prefix = []
    
    if(firstDay < 6){
      for(let i=0; i<=firstDay; i++){
        prefix.push("")
      }
    }
    return prefix.concat(arrayOfDates)
  }

  // const getAdjustedYears = (year) => {
  //   let index = arrayOfYears.findIndex((elem)=>elem.includes(year));
  //   return index
  // }


  const nextMonth = () => {
    if (currentDate.month < 11){
      setCurrentDate(prev => (
        {
          ...prev,
          month: prev.month + 1
        }
      ))
    } else{
      setCurrentDate(prev => (
        {
          ...prev,
          month: 0,
          year: prev.year + 1
        }
      ))
    }
  }

  const prevMonth = () => {
    if (currentDate.month > 0){
      setCurrentDate(prev => (
        {
          ...prev,
          month: prev.month - 1
        }
      ))
    } else{
      setCurrentDate(prev => (
        {
          ...prev,
          month: 11,
          year: prev.year - 1
        }
        ))
    }
  }

  const handleSelect = (time, number) => {
    setCurrentDate(prev => ({...prev, [time]: number})) 
    setMode("calendar")
  }

  const chooseBirthday = (item) => {
    setDateSelected({date:item.date, month:item.month, year:item.year, string: `${months[item.month]} ${item.date} ${item.year}`})
    
    }

  const handleChange = () => {
    setDateSelected(prev => ({...prev, string: `${months[prev.month]} ${prev.date} ${prev.year}`}))
    console.log("clicked")
  } 
  // const handleKeyDown = (event) => {
  //   // if (event.key==="enter" || event.key==="space"){
  //     console.log(event.key)
  //   // }
  // }

  const changeYears = (incr) => {
    if(incr === "up") {
      if(currentDate.index<arrayOfYears.length-1){
        setCurrentDate(prev => ({...prev, index: prev.index+1}))
      } 
    } else if (incr === "down"){
      if(currentDate.index>0){
        setCurrentDate(prev => ({...prev, index: prev.index-1}))
      }
    }
  }

  // const Input = (props) => {
  //   const ref = useRef();
  //   const [hasFocus, setFocus] = useState(false);
  
  //   useEffect(() => {
  //     if (document.hasFocus() && ref.current.contains(document.activeElement)) {
  //       setFocus(true);
  //     }
  //   }, []);
  
  //   return (
  //     <input
  //       {...props}
  //       ref={ref}
  //       onFocus={() => setFocus(true)}
  //       className="mt-96 ml-48 border rounded-md py-1 px-2"
  //       value={dateSelected.date ? `${months[dateSelected.month]} ${dateSelected.date} ${dateSelected.year}` : "select a date"}
  //     />
  //   );
  // }

  const MonthMode = () => {
    return(
      <div className='container w-[542px] h-96 m-20 p-6 pt-4 bg-white border-solid border rounded-xl shadow-lg'> 
        <div className="flex justify-between items-center pb-4">
          <p className='h-fit text-xl font-extrabold'>Select a Month</p>
          <div>
            <SVG.Close as="button" className="border fill-current text-neutral-black-100/50 rounded-full h-9 p-2 -mr-3 w-auto cursor-pointer active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100"
              onClick={closeSelector} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {months.map((month, i) => {
            return (
              <p key={i} className="border rounded text-center font-semibold py-4 active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100" 
                onClick={()=>handleSelect("month", i)}
                >
              {month}
              </p>
            )
          })}
        </div>
      </div>
    )
  }

  const YearMode = () => {
    return(
      <div className='container w-[542px] h-96 m-20 p-6 pt-4 bg-white border-solid border rounded-xl shadow-lg '> 
        <div className="flex justify-between items-center pb-4">
          <p className='text-xl font-extrabold'>{arrayOfYears[currentDate.index][0]} - {arrayOfYears[currentDate.index][11]}</p>
          <div className="flex mr-auto ml-[15px] space-x-2.5 items-center">
            <div className='text-lg cursor-pointer' onClick={()=>changeYears("down")}>
              <SVG.IconLineArrowDown 
                className="text-neutral-black-100/50 rotate-90 border rounded-full h-9 p-2 w-auto cursor-pointer fill-current active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100 "
                />
            </div>
            <div className='text-lg cursor-pointer' onClick={()=>changeYears("up")}>
              <SVG.IconLineArrowDown 
                className="text-neutral-black-100/50 -rotate-90 border rounded-full h-9 p-2 w-auto cursor-pointer fill-current active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100 " />
            </div>
          </div>
          <div>
            <SVG.Close as="button" className="border fill-current text-neutral-black-100/50 rounded-full h-9 p-2 -mr-3 w-auto cursor-pointer active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100"
              onClick={closeSelector} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {arrayOfYears[currentDate.index].map((year, i) => {
            return (
              <p key={i} className="border rounded text-center font-semibold py-4 active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100/10" 
                  onClick={()=>handleSelect("year", year)}
                  >
                {year}
              </p>
            )
          })}
        </div>
      </div>
    )  
    
  }

  return (
    <>
      <Popover>
        <Popover.Button 
          as="input" 
          type="text"  
          tabIndex="0"
          placeholder='Select a Date'
          onChange={handleChange}
          className="mt-96 ml-48 border rounded-md py-1 px-2"
          value={dateSelected.string}
        ></Popover.Button>
        {open && 
          <Popover.Panel >
          {mode==="calendar" &&
            <div className="container w-96 pt-4 border-solid border rounded-xl shadow-lg m-20 text-neutral-black-100">
            <div className='flex justify-between px-4 mb-4' >
              <div className='relative flex flex-col'>
                <p className='text-xl/[24px] font-medium cursor-pointer mb-1 rounded hover:bg-neutral-black-100/10 p-1' tabIndex="0"
                  onClick={()=>setMode("month")}
                  >{months[currentDate.month]}</p>
                <p className='text-xl/[24px] font-medium p-1 w-fit stretch-0 cursor-pointer rounded hover:bg-neutral-black-100/10' tabIndex="0"
                onClick={()=>setMode("year")}
                >{currentDate.year}
                </p>
              </div>
              <div className="flex space-x-2.5 items-center">
                <div className='text-lg cursor-pointer' onClick={prevMonth}>
                  <SVG.IconLineArrowDown 
                    className="text-neutral-black-100/50 rotate-90 border rounded-full h-9 p-2 w-auto cursor-pointer fill-current active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100 " tabIndex="0"/>
                </div>
                <div className='text-lg cursor-pointer' onClick={nextMonth}>
                  <SVG.IconLineArrowDown 
                    className="text-neutral-black-100/50 -rotate-90 border rounded-full h-9 p-2 w-auto cursor-pointer fill-current active:border-0 active:bg-neutral-black-100/10 active:text-neutral-black-100" tabIndex="0"/>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 justify-items-center content-center border-y border-neutral-black-100/10 px-4">
              {days.map((day, i) => <p key={i} className="w-10 h-10 p-2 grid justify-items-center">{day}</p>)}
            </div>
            <div className="grid grid-cols-7 justify-items-center gap-1 mt-2 mb-2.5 px-4">
              {getAdjustedDates(currentDate.year, currentDate.month).map((item, i) =>{
                return item === "" ? 
                  <button
                    key={i}
                    disabled>{item}</button>
                    :
                  <button 
                    key={i} 
                    onClick={()=>chooseBirthday(item)}
                    className= {classNames({
                      "rounded-full w-10 h-10 font-semibold": item!=="",
                      "text-white bg-green-400": 
                        item.month===dateSelected.month && item.year===dateSelected.year && item.date===dateSelected.date
                      })}>{item.date}
                  </button>
              }
              )}
            </div> 
          </div>
          }
          {mode==="month" && MonthMode()}
          {mode==="year" && YearMode()}
          </Popover.Panel>
        }
      </Popover>
    </>
  
  )
}

export default Calendar_Widget
