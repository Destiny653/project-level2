'use client'
import React, {useContext} from 'react';
import style from './DarkMode.module.css';
import { Moon, Sun } from 'react-feather';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkMode = () => {

    const {toggleMode, mode} = useContext(ThemeContext)

  return (
    <div className={`${style.container} justify-end items-baseline`} onClick={()=>{toggleMode()}}>
      <div className={style.icon}>
        <Moon color='gold' size={20} />
      </div>
      <div className={style.icon}>
        <Sun color='gold' size={20}/>
      </div>
      <div className={style.ball} style={mode == 'light' ? { left: '2px'} : {right:'2px'}} ></div>
    </div>
  )
}

export default DarkMode
