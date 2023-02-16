import React from 'react'
import { onPressEnter as onEnterDo } from '../../../utils/onPressEnter'
import { IconByName } from '../../ui/IconByName'

export const InputIcon = ({title, onPressEnter, onChangeValue, value, icon, name, className, ...otherProps}:any, ) => (
  <div className={`input-group flex-nowrap ${className}`}>
    <span 
      className="input-group-text" 
      id="addon-wrapping">
        <IconByName icon={icon} />
    </span>
    { name ? 
        <input
          id={name} 
          className="form-control" 
          placeholder={title} 
          onKeyUp={e => onEnterDo(e, onPressEnter)}
          onChange={e => onChangeValue(e.target.value)}
          value={value}
          autoFocus {...otherProps}/>
        :
        <input 
          className="form-control" 
          placeholder={title} 
          onKeyUp={e => onEnterDo(e, onPressEnter)}
          onChange={e => onChangeValue(e.target.value)}
          value={value} {...otherProps}/>
        }

  </div>
)