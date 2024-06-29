import {useRef, useState, useEffect} from "react";

function TypeWriter({text,typingSpeed,deletingSpeed}){
    const array = ["SOFTWARE DEVELOPER", "MERN STACK DEVELOPER"]
    const [displayedText,setDisplayedText] = useState("");
    const [isDeleting,setDeleting] = useState(false);
    const [index,setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = ()=>{
            if(isDeleting){
                if(displayedText.length > 0){
                    setDisplayedText((prev) => prev.slice(0,-1));
                }
                else{
                    setIndex((index+1)% text.length);
                    setDeleting(false);
                }
            }
            else{
                if(displayedText.length < text[index].length){
                    setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
                }
                else{
                    setDeleting(true);
                }
            }
        };
        const timeout = setTimeout(handleTyping, isDeleting?deletingSpeed:typingSpeed)

        return() => clearTimeout(timeout);
    },[displayedText,isDeleting,index])
    return(
        <div className="typing-effect">
            <span>{displayedText}</span>
        </div>
    )
}
export default TypeWriter;