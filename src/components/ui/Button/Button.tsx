import React from 'react'
import IconByName from '../IconByName/IconByName'

export const Button = 
  ({onClick, title, className, icon, primary, left}:any) => 
    <button 
      style={primary ? {color: "var(--bsp-btn-font-color)", background: "var(--bsp-primary-button)"} : {color: "var(--bsp-btn-font-color)"}}
      type="submit" 
      className={`btn ${className} ${left? "va-center" : ""}`} 
      onClick={onClick}>
        <span>
          {icon ? <IconByName icon={icon} /> : undefined}
          { title ?
              <label 
                style={{color: "var(--bsp-btn-font-color)"}} 
                className={left? "ms-1": "d-block"}>
                  {title}
              </label>
            :
              undefined
          }
        </span>
    </button>