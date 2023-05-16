import React from 'react'
import * as SVGMain from "../assets/svg/index"

const ProfilePic = ({ tempFile, setTempFile }) => {
    const handleImageChange = (event) => {
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
            onChange={handleImageChange}
          />
        </label>
      </div>
    )
  }

  export default ProfilePic
