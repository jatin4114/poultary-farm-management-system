import { Link} from "react-router-dom"

export function BottomWarning({label,buttonText,to}){
    return <div className="py-2 text-sm flex justify-center">
        
        <div>
    {label}
        </div>
        
        
        <Link className="pointer underling pl-1 cursor-pointor" to={to}>
        {buttonText}
        </Link>
        
        </div> 
   
}