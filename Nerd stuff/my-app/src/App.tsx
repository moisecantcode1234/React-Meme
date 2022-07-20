import React from 'react';
import './App.css';
import Header from './components/Header'
import Submitform from './components/SubmitForm';
import { Meme }from './components/Meme'
import MemeElement from './components/MemeElement'

function App() {

  const [title,setTitle]= React.useState<string>('')
  const [link,setLink] = React.useState<string>('')
  const [memes,setMemes] = React.useState<Meme[]>([])
  const test: Meme = {
    id: 1,
    title : 'The parody',
    isCringe: false,
    link: 'https://i.pinimg.com/originals/a4/f8/76/a4f87654a7f881390312402d56c8a524.jpg',
    likes: 700
  }
  return (
    <div className="App">
      <Header/>
      <Submitform title= {title} setTitle = {setTitle} link = {link} setLink = {setLink} />
      <MemeElement meme={}/>
    </div>
  );
}

export default App;
