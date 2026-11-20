import {useEffect,useState} from 'react'
export default function useTypewriter(phrases,{speed=70,del=35,pause=1400}={}){
  const [text,setText]=useState(''),[i,setI]=useState(0),[deleting,setDeleting]=useState(false)
  const reduced=typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches
  useEffect(()=>{setText('');setI(0);setDeleting(false)},[phrases])
  useEffect(()=>{
    if(reduced){setText(phrases[0]);return}
    const full=phrases[i%phrases.length];let id
    if(!deleting&&text===full)id=setTimeout(()=>setDeleting(true),pause)
    else if(deleting&&text==='')id=setTimeout(()=>{setDeleting(false);setI(n=>(n+1)%phrases.length)},250)
    else id=setTimeout(()=>setText(deleting?full.slice(0,text.length-1):full.slice(0,text.length+1)),deleting?del:speed)
    return()=>clearTimeout(id)
  },[text,deleting,i,phrases,reduced,speed,del,pause])
  return text}
