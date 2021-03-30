import React, {SelectHTMLAttributes}from 'react';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string;
  name: string;
  options: Array<{
    value:string,
    label: string
  }>
}

const Select:React.FC<SelectProps>  = ({name, options, ...rest}:SelectProps) =>{
  return(
    <select value="" id={name} {...rest}>
      <option value="" disabled hidden> Selecione o médico desejado </option>
      {options.map(option=>{
        return <option key={option.value} value={option.value}> {option.label}</option>
      })}
    </select>
  )
}

export default Select;
