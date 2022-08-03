import React from 'react'
import { Meme } from './Meme'
import MemeElement from './MemeElement'
import './MemeList.css'
type Props = {
  memes: Meme []
  setMemes:React.Dispatch<React.SetStateAction<Meme[]>>
}

const MemeList: React.FC <Props> = ({memes, setMemes}) => {
  return (
    <div className = "MemeList_container">
      {memes.map(
        (meme: Meme) => (<MemeElement meme = {meme} /> )
      )}
    </div>
  )
}

export default MemeList