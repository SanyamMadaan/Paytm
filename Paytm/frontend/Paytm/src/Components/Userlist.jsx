import { Inputs } from "./Inputs"
export async function Userlist(){
    const allusers=await axios.get("http://localhost:3000/api/v1/user/bulk");
    return(
        <>
        <h2 className="ml-4 mt-2 font-medium">Users</h2>
        <div className="mx-4 my-2">
        <Inputs type="text" placeholder="Search users..."></Inputs>
        </div>
        <div>
            allusers.map(user=>{
                
            })
        </div>
        </>
    )
}