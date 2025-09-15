import { Dialog, DialogTrigger, DialogContent,DialogHeader } from "@/components/ui/dialog";
import CreateProjectForm from "@/pages/Project/CreateProjectForm";
import { Button} from "@/components/ui/button"
import { PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Redux/Store";
import { logout } from "@/Redux/Auth/Action";

function Navbar() {
    const {auth} = useSelector(store => store)
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    const hangleLogout = () => {
        dispatch(logout())
    }

    return (<div className="border-b py-4 px-5 flex items-center justify-between">
         <div className="flex items-center gap-3">
             <p onClick={()=>navigate("/")} className="cursor-pointer">Project Managment</p>
             <Dialog>
                <DialogTrigger asChild>
                      <Button variant="ghost">
                        New Project
                      </Button>
                </DialogTrigger>
                <DialogContent>
                     <DialogHeader>
                         Create New Project
                     </DialogHeader>
                     <CreateProjectForm/>
                </DialogContent>
             </Dialog>
             <Button variant="ghost" onClick={()=> navigate("/upgrade_plan")}>Upgrade</Button>
         </div>
           <div className="flex gap-3 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                         <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                             <PersonIcon/>
                         </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                         <DropdownMenuItem onClick={hangleLogout}>
                             Logout
                         </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>{auth.user?.fullName}</p>
           </div>
    </div>
    )
}

export default Navbar;