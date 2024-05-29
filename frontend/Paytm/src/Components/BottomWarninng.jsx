import {Link} from 'react-router-dom';

export function BottomWarning(props){
return(
    <div className="flex  mt-3 text-center pl-5">
     <p className='text-xl'>{props.label}</p>
     <Link className="ml-1 text-xl underline" to={props.to}>{props.buttontext}</Link>
    </div>
)
}