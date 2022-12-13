import { irisApi } from '../api'


const Iris = () => {
    
    const onClick = () => {
        irisApi().then(()=>{
            alert("됐어유")
        })
        .catch(()=>{
            alert("안됐어유")
        })
    }
    
    return (
        <>
            <button onClick={()=>onClick()}>붓꽃 분류</button>
        </>
    )
    
    
}


export default Iris;