import run from '../config/gemini.js'
import { createContext, useState } from 'react'

export const Context = createContext()

const Contextprovider = (props) => {
    const [input, setInput] = useState("")
    const [previus, setPrevius] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [recent, setRecent] = useState("")
    const [resultData, setResultData] = useState("")

    const newChat = ()=>{
        setLoading(false)
        setShow(false)
    }

    const delay = (index, next) => {
        setTimeout(function () {
            setResultData((prev) =>prev + next)
        }, 75 * index)
    }

    const onSent = async (prompt) => {
        setLoading(true)
        setRecent(input)
        setResultData("")
        let response 

        if(prompt !==undefined){
            response = await run(prompt)
            setRecent(prompt)
        }
        else{
            setPrevius((prev) => [...prev, input])
            response = await run(input)
        }

        setShow(true)

        let responseArr = response.split("**")
        let newresponse = ""

        for (let i = 0; i < responseArr.length; i++) {
            if (i == 0 || i % 2 !== 1) {
                newresponse += responseArr[i]
            }
            else {
                newresponse += "<b>" + "<br>" + responseArr[i] + "</br>" + "</b>"
            }
        }
        let newresponse2 = newresponse.split("*")
        let responseArr2 = newresponse2

        for (let i = 0; i < responseArr2.length; i++) {
            const next = responseArr2[i]
            delay(i, next + " ")
        }

        setLoading(false)
        setInput("")
    }


    const contextValue = {
        input, setInput, previus, setPrevius, loading, show, recent, setRecent, resultData, setResultData, onSent, newChat
    }

    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )

}

export default Contextprovider