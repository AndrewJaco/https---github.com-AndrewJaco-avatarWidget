import React from 'react'
import ReactDOMServer from "react-dom/server"
import classNames from 'classnames'
import * as SVGSupporter from "../assets/svg/avatars/supporter_comp/index"

const SupportingPic = ({setSupporting, supportValue, setSupportValue, setTempFile}) =>{

  const supportText = [
    { svg: <SVGSupporter.PearsChatPlatformSupporter />,
      text: "PearsChat Platform Supporter", 
      price: 2
    },
    { svg:<SVGSupporter.HivAndAidsAssociationsSupporter />,
      text: "Sexual Diseases Associations Supporter", 
      price: 5
    },
    { svg: <SVGSupporter.AntiRacismAssociationsSupporter />,
      text: "Anti-racism Associations Supporter", 
      price: 5
    },
    { svg: <SVGSupporter.EcologicalAssociationsSupporter />,
      text: "Ecological Associations Supporter", 
      price: 5
    },
    { svg: <SVGSupporter.GenderEqualityAssociationsSupporter />,
      text: "Gender Equality Associations Supporter",
      price: 5
    },
    { svg: <SVGSupporter.AgainstCancerAssociationsSupporter />,
      text: "Women Associations Supporter", 
      price: 5
    },
    { svg: <SVGSupporter.MentalHealthAssociationsSupporter />,
      text: "Mental Health Associations Supporter", 
      price: 5
    },
    { svg: <SVGSupporter.NoViolenceAgainstWomenA />,
      text: "Bullying Associations Supporter", 
      price: 5
    }
  ]

  const handleSupport = (svg, id) => {
    //convert to a blob
    const svgString = ReactDOMServer.renderToString(svg);
    const svgDoc = new DOMParser().parseFromString(svgString, "image/svg+xml");
    const svgBlob = new Blob([new XMLSerializer().serializeToString(svgDoc)], {
      type: "image/svg+xml",
    })
    
    setSupporting(true)
    setSupportValue(id)
    setTempFile(svgBlob)
  };

  const Rectangle = () => {
    return (
      <div className="grid grid-cols-4 gap-4 mb-8">
        {supportText.map(item =>{
          return (
            <div key={item.text}
              className={classNames("border border-[#eaebeb] rounded-[10px] flex flex-col items-center pt-[19px] pb-4 text-center text-sm/5 font-semibold cursor-pointer", {"ring-2 ring-emerald-400": supportValue && item.text === supportValue,
                  })}
              onClick={()=>handleSupport(item.svg, item.text)}
            >
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
        <SVGSupporter.IconServiceSupporting className="mr-4" />
        <p className="flex-1">By choosing a Supporting Avatar as personal profile picture, you will be a supporter of the selected cause. A donation will be sent to an association. Read more <a>here</a></p>
      </div>
    </div>
  )
}

  export default SupportingPic