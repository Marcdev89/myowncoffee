
const Title = ({text, img}) => {

  //Title style and main image from any page

  return (
          <>
            <div className="title-style">
              <h1>  {text} </h1> 
              <img className={img} src={require(`../../Images/${img}.png`)} alt="foto de portada de café" />
            </div>
          </>
  )
}

export default Title;