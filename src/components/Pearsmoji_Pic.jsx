import React, { useEffect, useRef, useState } from 'react'
import { Popover } from '@headlessui/react'
import classNames from 'classnames'
import { toBlob } from 'html-to-image'

import * as SVGMain from "../assets/svg/index"
import * as SVGPearsmojis from "../assets/svg/avatars/pearsmojis_comp/index"

const PearsmojiPic = ({ tempFileRef }) => {
  const [bgColor, setBgColor] = useState("#cdebff")
  const [selectedEmoji, setSelectedEmoji] = useState(0)
  const canvasRef = useRef(null)
  const divRef = useRef(null)
  const canvasSize = 244

  const svgComponents = [
    "PearsmojiAlien", "PearsmojiAmazed", "PearsmojiAngry", "PearsmojiBitten", "PearsmojiClown", "PearsmojiCrying", "PearsmojiEmbarrassed", "PearsmojiEnergetic", "PearsmojiFaded", "PearsmojiFrozen", "PearsmojiFunnyTongue", "PearsmojiGhost", "PearsmojiKiss", "PearsmojiLoverEyes", "PearsmojiMonster", "PearsmojiMulticolor", "PearsmojiNauseated", "PearsmojiNerd", "PearsmojiPerplexed", "PearsmojiSatisfied", "PearsmojiSleepy", "PearsmojiTransparent", "PearsmojiWorried"
  ]

  const handleEmojiChange = (index) => {
    // console.log(index)
    setSelectedEmoji(index)
    saveAsBlob()
  }

  const saveAsBlob = () => {
    toBlob(divRef.current, { cacheBust: true, })
    .then((blob) => {
      tempFileRef.current = blob
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, 2 * Math.PI)
    ctx.fillStyle = bgColor
    ctx.fill()

  }, [bgColor])

  const handleColorChange = (newColor) => {
    setBgColor(newColor)
    //save div as blob
    saveAsBlob()
  }

  const RenderedEmoji = ({className}) => {
    const EmojiComponent = svgComponents[selectedEmoji]
    const Emoji = SVGPearsmojis[EmojiComponent]
    return(
      <Emoji className={className}/>
    )
  }
  
  const colorList = ["#cdebff", "#ececec", "#d2ffcf", "#ffe8d0", "#ffd1d2", "#e4d2ff", "#373c39"]

  return (
    <>
      <div className="flex flex-col content-center justify-center">
        <div className="flex justify-center">
          <Popover className="relative inline-block">
            <Popover.Button className="mb-28">
              <div className="relative flex items-center justify-center group">
                <div ref={divRef} className="relative flex items-center justify-center w-60 h-60">
                  <canvas
                    ref={canvasRef}
                    width={canvasSize}
                    height={canvasSize}
                    className="w-60 h-60 rounded-full object-cover object-center inline-block group group-hover:opacity-75"
                  />
                  <RenderedEmoji className="absolute" />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-full"></div>
                <SVGMain.ButtonCircularEditEmoji className="hidden absolute group-hover:block transition duration-200"/>
              </div>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 mt-2 w-96 max-h-96 overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="grid grid-cols-6 gap-4 p-4">
                {svgComponents.map((EmojiComponent, index) => {
                  const Emoji = SVGPearsmojis[EmojiComponent]
                  return(
                  <div
                    key={index}
                    className={classNames("mx-2 cursor-pointer")}
                    onClick={()=> handleEmojiChange(index)}
                  >
                    <Emoji />
                  </div>
                  )
                })}
              </div>
            </Popover.Panel>
          </Popover>
        </div>
        <div className="flex justify-center">
          {colorList.map((c) => (
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
          ))}
        </div>
      </div>
    </>
  )
}

export default PearsmojiPic