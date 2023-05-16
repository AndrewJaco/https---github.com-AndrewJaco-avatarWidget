import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

export default function InitialPic({ name, tempFileRef }) {
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
      tempFileRef.current = blob
    })
    
  }, [bgColor])

  const handleColorChange = (newColor) => {
    setBgColor(newColor)
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
}
