const Card = ({d}) => {
    const handleButtonClick = (urlImage) => {
        window.open(urlImage)
    }
 
  return (
    <div  key={d.id} className="item">
        <div className="image">
           <img src={d.urls.small} alt={d.description} onClick={()=>handleButtonClick(d.urls.small)}/>
           <a className="btn-save" href="#">Guardar</a>    
           <a className="icon-upload" href=""><img src="/uploadicon.png" alt="upload" /></a>
           <a className="icon-dots" href=""><img src="/dotsicon.png" alt="options" /></a>
        </div>
        <p>{d.description}</p>
        <div>
            <img src={d.user.profile_image.small} className='user'/>
             <span>{d.user.name}</span>
        </div>
     </div>
  )
}

export default Card