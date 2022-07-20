import { Meme } from "./Meme";
import './MemeElement.css'
import {CgTrash} from 'react-icons/cg'
interface Props
{
    meme: Meme

}
const MemeElement: React.FC<Props> = ({meme}) => {
    return(
        <div className="MemeElement">
            <header className="MemeElement_title">{meme.title}</header>
            <button className="MemeElement_trash-button"><CgTrash/></button>

        </div>
    )
}
export default MemeElement