import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
// import {createRoot} from 'react-dom/client';
import { Dialog, Transition } from '@headlessui/react'
import classNames from "classnames";

import InitialPic from "./Initial_Pic";
import SupportingPic from "./Supporting_Pic";
import PearsmojiPic from "./Pearsmoji_Pic";
import ProfilePic from "./Profile_Pic";

import * as SVGMain from "../assets/svg/index"

export default function Avatar_Widget({initialValue}){
  const [ isOpen, setIsOpen ] = useState(false)
  const [ dialogContent, setDialogContent ] = useState("profilePic")
  const [ file, setFile ] = useState(initialValue)
  const [ tempFile, setTempFile ] = useState()
  const [ supporting, setSupporting ] = useState(false)
  const [ supportValue, setSupportValue ] = useState("")
  const tempFileRef = useRef(null)

  function openDialog() {
    setIsOpen(true)
  }

  function closeDialog() {
    setIsOpen(false)
  }

  const back = () => {
    setTempFile("")
    setSupportValue("")
    closeDialog()
  }

  const handleTab = (tab) => {
    setDialogContent(tab)
    setSupportValue("")
    setTempFile("")
    tempFileRef.current=""
  }

  const submitAvatar = () => {
    if(tempFileRef.current){
      setFile(tempFileRef.current)
    }else{
      setFile(tempFile)
    }
    setTempFile(undefined)
    console.log(file)
    closeDialog()
  }

  const ModalFooter = () => {
    return(
      <div className="flex w-full content-center justify-end border-t">
        <button className="text-lg font-semibold opacity-60 bg-transparent" onClick={back}>Back</button>
        <button className="text-lg/5 font-bold bg-green-100 text-white rounded-[10px] py-3 px-6 m-7" onClick={submitAvatar}>Confirm</button>
      </div>
    )
  }

  const buttonClass = (option) =>
    classNames(
      "text-sm rounded-2xl py-1 px-4 focus:outline-none",
      {
        "bg-slate-500 text-white": dialogContent === option,
        "bg-slate-200": dialogContent !== option,
      }
    )

  return (
    <>
      <div className="flex">
        <div >
          <p className="font-bold">Profile Picture</p>
          <p>Set a picture <br/>
              or choose an avatar</p>
        </div>
        {file ? <img 
                  src={URL.createObjectURL(file)} 
                  onClick={openDialog}
                  className="rounded-full w-24 h-24 object-cover object-center inline-block"/>

        : <SVGMain.PearsmojiAnonymous
            className="h-24 w-24 rounded-full"
            onClick={openDialog} />
        }
      </div>
      <Transition 
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
            <Dialog.Panel className="inline-block max-w-2xl w-full my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-xl"
              style={{height: "716px"}}>
              <div className="flex flex-col justify-between h-full">
                <Dialog.Title
                  className="flex space-x-1.5 justify-center mt-7 text-lg font-medium text-gray-900"
                >
                  <button 
                    onClick={()=>handleTab("profilePic")}
                    className={buttonClass("profilePic")}
                  >Profile Picture</button>
                    
                  <button 
                    onClick={()=>handleTab("supporting")}
                    className={buttonClass("supporting")}
                    >Supporting Avatar</button>
                    
                  <button 
                    onClick={()=>handleTab("pearsmojiPic")}
                    className={buttonClass("pearsmojiPic")}
                    >Pearsmoji</button>
                    
                  <button 
                    onClick={()=>handleTab("initialPic")}
                    className={buttonClass("initialPic")}
                    >Name Letter</button>
                    
                </Dialog.Title>

                  {dialogContent==="profilePic" && 
                    <ProfilePic
                      tempFile={tempFile}
                      setTempFile={setTempFile}
                    />}
                  {dialogContent==="supporting" && 
                    <SupportingPic
                      supportValue={supportValue}
                      setSupportValue={setSupportValue}
                      setSupporting={setSupporting}
                      setTempFile={setTempFile}
                      />}
                  {dialogContent==="pearsmojiPic" && 
                    <PearsmojiPic
                      tempFileRef={tempFileRef}
                    />}
                  {dialogContent==="initialPic" && 
                    <InitialPic 
                      name="Andrew"
                      tempFileRef={tempFileRef}
                      />}
                <ModalFooter />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}