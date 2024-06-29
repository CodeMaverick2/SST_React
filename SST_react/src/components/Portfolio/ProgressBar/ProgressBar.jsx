import './Progress.css';
function ProgressBar({percentage}){
    return(
        <div className="Progress-Bar">
            <div className="Progress" >
                <div className="progress" style={{width:`${percentage}%`}}><span>{percentage}%</span></div>
            </div>
        </div>
    )
}
export default ProgressBar;