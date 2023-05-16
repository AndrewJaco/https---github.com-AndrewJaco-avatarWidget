import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition} from '@headlessui/react'
import SvgPearsmojiAnonymous from "./assets/svg/PearsmojiAnonymous";
import classNames from "classnames";
const defaultAvatarUrl = "https://via.placeholder.com/150?text=Avatar";

import * as SVGMain from "./assets/svg/index"
import * as SVGSupporter from "./assets/svg/avatars/supporter/index"
import * as SVGPearsmojis from "./assets/svg/avatars/pearsmojis_comp/index"

export default function Avatar_Widget({initialValue}){
  const [isOpen, setIsOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState("profilePic")
  const [ file, setFile ] = useState(initialValue)
  const [ tempFile, setTempFile ] = useState()
  const [supporting, setSupporting] = useState(false)
  const tempFileRef = useRef(null);

  function openDialog() {
    setIsOpen(true)
  }

  function closeDialog() {
    setIsOpen(false)
  }

  const back = () => {
    setTempFile("")
    closeDialog()
  }

  const handleTab = (tab) => {
    setDialogContent(tab)
    console.log(file)
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
  
  const handleAvatarChange = (event) => {
    const avatarFile = event.target.files[0];
    const reader = new FileReader()

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      fetch(dataUrl)
        .then((res) => res.blob())
        .then((blob) => {
          setTempFile(blob)
        })
    }

    reader.readAsDataURL(avatarFile);
  }

  const ProfilePic = () =>{
    return(
      <div className="flex flex-col content-center">
        <div className="flex justify-center">
          <SVGMain.ButtonCircularDelete 
            className="w-8 h-8 mb-5 text-gray-500 cursor-pointer hover:opacity-90"
            onClick={()=>setTempFile("")}
            style={{ visibility: tempFile ? 'visible' : 'hidden' }}
            />
        </div>
        <label
          htmlFor="avatar-input"
          className="cursor-pointer flex flex-col items-center "
        >
          {tempFile ? 
            <img
              src={ URL.createObjectURL(tempFile) }
              alt="Profile avatar"
              className="w-60 h-60 mb-4 rounded-full object-cover object-center inline-block"
            />
          :
          <div className="w-60 h-60 mb-4 rounded-full flex justify-center items-center bg-[#727674]">
            <SVGMain.ButtonCircularEditPicture />
          </div>
          }
          <p className="uppercase text-sm font-bold text-black opacity-50">select a picture</p>
          <input
            type="file"
            id="avatar-input"
            className="hidden"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </label>
      </div>
    )
  }

  const Supporting = ({ renderSvg }) =>{
    const supportText = [
      { svgRef: useRef(null),
      svg: SVGSupporter.PearsChatPlatformSupporter,
      text: "PearsChat Platform Supporter", 
      price: 2
    },
    { svgRef: useRef(null),
      svg:SVGSupporter.HivAndAidsAssociationsSupporter,
      text: "Sexual Diseases Associations Supporter", 
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.AntiRacismAssociationsSupporter,
      text: "Anti-racism Associations Supporter", 
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.EcologicalAssociationsSupporter,
      text: "Ecological Associations Supporter", 
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.GenderEqualityAssociationsSupporter,
      text: "Gender Equality Associations Supporter",
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.AgainstCancerAssociationsSupporter,
      text: "Women Associations Supporter", 
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.MentalHealthAssociationsSupporter,
      text: "Mental Health Associations Supporter", 
      price: 5
    },
    { svgRef: useRef(null),
      svg: SVGSupporter.NoViolenceAgainstWomenA,
      text: "Bullying Associations Supporter", 
      price: 5
    }
    ]



  const handleSupport = (svg) => {
    // const svgData = new XMLSerializer().serializeToString(svgDom.documentElement);
    // const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    console.log(svg)
    }

    const Rectangle = () => {
      return (
        <div className="grid grid-cols-4 gap-4 mb-8">
          {supportText.map(item =>{
            return (
              <div className="border border-[#eaebeb] rounded-[10px] flex flex-col items-center pt-[19px] pb-4 text-center text-sm/5 font-semibold cursor-pointer"
                onClick={()=> handleSupport(item.svg)}>
                {item.svg}
                <p className="mt-[15px] mb-3">{item.text}</p>
                <p className="text-[#9a9d9c] text-[15px]">${item.price} monthly</p>
              </div>
            )
          })}
        </div>
      )
    }
    
    return(
      <div className="m-5">
        <Rectangle />
        <div className="flex items-center text-[#0070a4] text-sm/5 bg-[#f2fbff] rounded-[10px] px-4 py-5">
          {SVGSupporter.IconServiceSupporting}
          <p className="flex-1 ml-4">By choosing a Supporting Avatar as personal profile picture, you will be a supporter of the selected cause. A donation will be sent to an association. Read more <a>here</a></p>
        </div>
      </div>
    )
  }

  const PearsmojiPic = () =>{
    return(
      <div>This is for the pearsmoji avatar</div>
    )
  }
  
  const InitialPic = ({ name }) => {
    const [bgColor, setBgColor] = useState("#cdebff")
    
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")

    const canvasSize = 244
    const fontSize = 120
    const canvasRef = useRef(null)
    
    useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      ctx.fillStyle = bgColor
      ctx.beginPath()
      ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.textAlign = "center"
      ctx.fillStyle = darkenColor(bgColor)
      ctx.font = `bold ${fontSize}px Arial`
      ctx.fillText(initials, canvasSize / 2, canvasSize / 2 + fontSize / 3)

      canvas.toBlob((blob) => {
        tempFileRef.current= blob
      })
      
    }, [bgColor])

    const handleColorChange = (newColor) => {
      setBgColor(newColor)
    }

    return (
      <>
        <div className="flex flex-col content-center justify-center">
          <div className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={canvasSize}
              height={canvasSize}
              className="w-60 h-60 mb-28 rounded-full object-cover object-center inline-block"
            />
          </div>
          <div className="flex justify-center">
            {["#cdebff", "#ececec", "#d2ffcf", "#ffe8d0", "#ffd1d2", "#e4d2ff", "#373c39"].map(
              (c) => (
                <div
                  key={c}
                  className="mx-2 cursor-pointer rounded-full"
                  onClick={() => handleColorChange(c)}
                  style={{ backgroundColor: c }}
                >
                  <div
                    className={classNames("rounded-full w-11 h-11", {
                      "ring-2 ring-offset-4 ring-emerald-400": bgColor === c,
                    })}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
      </>
    );
  };


  const ModalFooter = () => {
    return(
      <div className="flex w-full content-center justify-end border-t">
        <button className="text-lg font-semibold opacity-60 bg-transparent" onClick={back}>Back</button>
        <button className="text-lg/5 font-bold bg-green-100 text-white rounded-[10px] py-3 px-6 m-7" onClick={submitAvatar}>Confirm</button>
      </div>
    )
  }

  const darkenColor = (color) => {
      if (color==="#373c39"){
        return "#dddddd"
      }
      const amount = 70; // adjust this value to make the color darker or lighter
      const r = parseInt(color.slice(1, 3), 16) - amount;
      const g = parseInt(color.slice(3, 5), 16) - amount;
      const b = parseInt(color.slice(5, 7), 16) - amount;
      return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    };

  const buttonClass = (option) =>
    classNames(
      "text-sm rounded-2xl py-1 px-4 focus:outline-none",
      {
        "bg-slate-500 text-white": dialogContent === option,
        "bg-slate-200": dialogContent !== option,
      }
    )

  const renderSvg = (SvgComponent, ref) => {
    const svgStr = new XMLSerializer().serializeToString(SvgComponent)
    const parser = new DOMParser()
    const svgDOM = parser.parseFromString(svgStr, "image/svg+xml")
    return <SvgComponent ref={ref} svgDom={svgDOM} />
  }

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

                  {dialogContent==="profilePic" && <ProfilePic/>}
                  {dialogContent==="supporting" && <Supporting renderSvg={renderSvg}/>}
                  {dialogContent==="pearsmojiPic" && <PearsmojiPic/>}
                  {dialogContent==="initialPic" && <InitialPic name="Andrew"/>}
                <ModalFooter />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}