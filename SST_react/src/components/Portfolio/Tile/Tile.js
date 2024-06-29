import './Tile.css';
function Tile({header, subHeader, img, text, link, linkText, position,bgColor}){
    return(
        <div className={`tile ${position} ${bgColor}`}>
            <div>
                <div className="img-parent">
                    <img src={img} alt="title-img"></img>
                </div>
            </div>
            <div>
                <h2>{header}</h2>
                <h3>{subHeader}</h3>
                
                <div className="text">
                    {text}
                </div>
                <div className="link-parent">
                    <a href={link} className="link">{linkText}</a>
                </div>
            </div>
        </div>
    )
}
export default Tile;