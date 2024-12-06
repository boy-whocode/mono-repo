import { useCallback, useLayoutEffect } from "react"

export const useCloseWhenClickOutside = (
    toggleState:boolean,
    setToggleState:(value: boolean)=>void,
    refName: React.MutableRefObject<HTMLDivElement | HTMLElement | null>
) =>{
    const handleClickOutside = useCallback((e: MouseEvent)=>{
        if(
            toggleState &&
            refName.current &&
            !refName.current.contains(e.target as Node)
        ){
            setToggleState(false)
        }
    },[toggleState, setToggleState, refName])
    useLayoutEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);
        return ()=> document.removeEventListener("mousedown", handleClickOutside)
    })
}