import Sam from "./component/Sam";
import NewNav from "./NewNav"
import LForm from "./LForm/login";
export default function Home(){
  return(
    <div>
      
      <Sam/>
      <h1 className="text-3xl font-bold underline">
    Hello world! </h1>

    <NewNav/>
 
    </div>
  )
}