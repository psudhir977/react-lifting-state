import React from 'react'

 function BoilingVerdict(props) {

    console.log('Temp -->' + props.celsius)
    if(props.celsius >= 100){
        return(
        <div>
                <p>the water would boil</p>
        </div>)
    }
     return <p>The water would not boil</p>
}

export default BoilingVerdict
