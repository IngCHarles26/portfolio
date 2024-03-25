import { useEffect, useState } from "react";

const keyboardActions:{[key:string]:string} = {
  KeyW:   'moveForward',
  KeyS:   'moveBackward',
  KeyA:   'moveLeft',
  KeyD:   'moveRight',
  Space:  'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log',
}

const initialActions = {
  moveForward: false,
  moveBackward: false,
  moveLeft: false,
  moveRight: false,
  jump: false,
  dirt: false,
  grass: false,
  glass: false,
  wood: false,
  log: false,
}

export const useKeybaord = ()=>{
  const [actions, setActions] = useState(initialActions);

  useEffect(()=>{
    const handleKey = (e:KeyboardEvent,bool:boolean)=>{
      const action = keyboardActions[e.code];
      if(action) setActions(prev=>({...prev,[action]:bool}))
    }

    const handleKeyDown = (e:KeyboardEvent) => handleKey(e,true)
    const handleKeyUp   = (e:KeyboardEvent) => handleKey(e,false)

    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('keyup',handleKeyUp);
    
    return ()=>{
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('keyup',handleKeyUp);
    }
  },[])
  return actions;
}