import React from "react";
import { ReactDOM } from "react";
import './SubmitForm.css'

interface Props
{
    title:string,
    setTitle:React.Dispatch<React.SetStateAction<string>>
    link:string,
    setLink:React.Dispatch<React.SetStateAction<string>>
}
const Submitform: React.FC<Props> =({title,setTitle,link,setLink}) => 
{
    return (
        <form className="SubmitForm">
            <div className="SubmitForm_title"><b>Add a Meme:</b></div>
            <div className="SubmitForm_title-label"><b>Title:</b></div>
            <input
            className="SubmitForm_title-textbox"
            type = 'input'
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder = 'Enter a Title'/>

            <div className="SubmitForm_link-label"><b>Link to Meme:</b></div>
            <input
            className="SubmitForm_link-textbox"
            type = 'input'
            value={link}
            onChange = {(e) => setLink(e.target.value)}
            placeholder = 'Hurry!' />
            <button className="SubmitForm_button">Submit!</button>
        </form>

    )
}
export default Submitform