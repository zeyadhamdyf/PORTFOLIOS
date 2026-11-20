import {createContext,useContext,useEffect,useState} from 'react';import en from '../translations/en.js';import ar from '../translations/ar.js'
const T={en,ar},Ctx=createContext()
export const LangProvider=({children})=>{
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('lang')==='ar'?'ar':'en'}catch{return 'en'}})
  useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';try{localStorage.setItem('lang',lang)}catch{}},[lang])
  return <Ctx.Provider value={{lang,t:T[lang],toggle:()=>setLang(l=>l==='en'?'ar':'en')}}>{children}</Ctx.Provider>}
export const useLang=()=>useContext(Ctx)
