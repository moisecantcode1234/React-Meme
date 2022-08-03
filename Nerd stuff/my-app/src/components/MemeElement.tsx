import { Meme } from "./Meme";
import './MemeElement.css'
import {CgTrash} from 'react-icons/cg'
import { AiFillDislike , AiFillLike} from 'react-icons/ai'
import MemeList from "./MemeList";
interface Props
{
    meme: Meme

}
const MemeElement: React.FC<Props> = ({meme}) => {
    return(
        <div className="MemeElement">
            <header className="MemeElement_title"><b>{meme.title}</b></header>
            <button className="MemeElement_trash-button"><CgTrash/></button>
            <img className = 'MemeElement_picture' src = {meme.link} alt = {meme.link}/>
            <button className = 'MemeElement_like-button'><AiFillLike/></button>
            <button className = 'MemeElement_dislike-button'><AiFillDislike/></button>
            <span className = 'MemeElement_count'>{meme.likes}</span>
            {
                meme.isCringe ? <div></div> : <div/>
            }
        </div>
    )
}
export default MemeElement