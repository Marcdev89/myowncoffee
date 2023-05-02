//progress bar

const Step = ({percent}) => {

  return (
    <>
      <div className="progress"> 
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark " 
              role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
              aria-valuemin="0" aria-valuemax="100" style= {{width: percent}}> {percent}
        </div>
      </div>
    </>
  )
}

export default Step;