import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currText, setCurrText] = useState(localStorage.getItem(`txt`) || ``)
  function alphabets() {
    let alphabet: string = 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ'
    const non_al: string = 'ะาเแโไใๅฤฦๆฯ'
    alphabet += non_al
    const arabic_num: string = '1234567890'
    alphabet += arabic_num
    const th_num: string = '๑๒๓๔๕๖๗๘๙๐'
    alphabet += th_num
    const eng: string = 'abcdefghijklmnopqrstuvwxyz'
    alphabet += eng
    alphabet += eng.toUpperCase()
    const symbol: string = '#$%&!฿=+:.?(>_<);\'\"'
    alphabet += symbol
    return alphabet
  }
  function split(chars: string) {
    const a = alphabets()
    let retText = ``
    for (let char of chars) {
      if (char === ` `) {
        continue
      } else if (char === `\n`) {
        retText += `\n`
        continue
      } else if (char === `ำ`) {
        retText += "ํ"
        retText += ` `
        retText += `า`
        continue
      } else if (a.indexOf(char) !== -1) {
        retText += ` `
      }
      retText += `${char}`
    }
    return retText
  }

  return (
    <div className="App">
      <div className="output">
      {split(currText)}
      </div>
      <button id='copy' onClick={(e) => {
        e.preventDefault()
        navigator.clipboard.writeText(split(currText))
        toast(`Text Copied!`)
      }}>Copy</button>
      <textarea onChange={(e) => {
        e.preventDefault()
        localStorage.setItem(`txt`, e.currentTarget.value)
        setCurrText(localStorage.getItem(`txt`) || ``)
      }} value={currText} />
      <ToastContainer />
    </div>
  )
}

export default App
