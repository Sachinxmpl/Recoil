import  {atom, selector} from "recoil"

export const textState = atom({
            key : "textState" , 
            default : "Sachin"
})

export const counter = atom({
            key : "counter" , 
            default : 0 
})


export const characterCounter = selector({
            key : "characterCount" ,
            get : ({get})=>{
                        const temp = get(textState)
                        return temp.length;
            }
})