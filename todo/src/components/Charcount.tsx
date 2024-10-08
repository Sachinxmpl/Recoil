import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counter, textState, characterCounter } from "../atom/ex";


export function CharacterCounter() {
            const [text, setText] = useRecoilState(textState)
            const count = useRecoilValue(counter)
            const length = useRecoilValue(characterCounter)
            return (
                        <>

                                    <div>
                                                <input
                                                            type="text"
                                                            value={text}
                                                            onChange={(e) => {
                                                                        setText(e.target.value)
                                                            }}
                                                />
                                                {
                                                            text
                                                }
                                                <div>

                                                            {
                                                                        length
                                                            }
                                                </div>
                                    </div>
                                    {
                                                count
                                    }
                                    <Button />
                        </>
            )
}



function Button() {
            const setCount = useSetRecoilState(counter);
            return (
                        <button onClick={() => setCount((c) => c + 1)}>Increase</button>
            )
}