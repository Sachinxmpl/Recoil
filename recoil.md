### Recoil is a state management library for React, so you need to have React installed and running to use Recoil. The easiest and recommended way for bootstrapping a React application is to use Create


npx create-react-app my-app
npm install recoil

### Atom
An atom represents a piece of state. Atoms can be read from and written to from any component. Components that read the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all components subscribed to that atom:



### Step 1 
Add a RecoilRoot wrapper


```typescript

 import { RecoilRoot } from "recoil"
 import { CharacterCounter } from "./CharacterCounter"

 const App=()=>{
          return (
		<RecoilRoot>
				Hellow 
				<CharacterCounter/>
		</RecoilRoot>
	
	  )
}

export default App
```


### Step2 Creating an atom 
```typescript
import {atom} from "recoil"

const textState = atom({
            key : "textState" , 
            default : "sachin"
})

export {
            textState
}
```

### Step3 useRecoilState
useRecoilState return the variable + setter function 

useRecoilValue returns the value only 

useSetRecoilState return the setter function only 

```typescript
import { useRecoilState } from "recoil";
import { textState } from "./atom/test1";

export function CharacterCounter() {
        const [text, setText] = useRecoilState(textState);
        return (
                <div>
                        <input
                                type="text"
                                value={text}
                                onChange={(e) => {
                                        setText(e.target.value);
                                }}
                        />
                        {
                                text
                        }
                </div>
        );
}

```


### selector 
If two state depends on each other 
```typescript
import { selector } from "recoil";
import { countState,textState } from "../atom/test1";

export const jointwo = selector({
            key : "htisfsfda" , 
            get : ({get})=>{
                        const a = get(textState)
                        const b = get(countState)
                        return a+b ; 
            }
})
export const charactercounter = selector({
            key : "htisfsfda" , 
            get : ({get})=>{
                        const a = get(textState)
                        return a.length;
            }
})
```



# Asynchronous queries in recoil 
What if we have to get the value from an api 

#### First insight aporach 
- we would do const data = axios.fetch() ans setText(data)

What is the problem in this?
The problem is we have to pass the defaul state to atom and there is like a flick between defualt state and acutal setted state from api 

Default value of atom can be an asynchronous selector which makes a api request 

```typescript
import { atom, selector } from "recoil";
import axios from "axios";

export const userdetails = atom({
            key : "userdetails" , 
            default : selector({
                        key : "detailsapi" , 
                        get : async()=>{
                                    const res = await axios.get("https://some-random-api.com/facts/dog")
                                   
                                    console.log(res.data)
                                    return res.data
                        }
            })
})
```
now import userdetails as usual 


# Atom family 
if component want atom specific to given id , then create atom dynamically 
