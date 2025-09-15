import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useDispatch, useSelector } from "react-redux"
import { assignedUserToIssue } from "@/Redux/Issue/Action"

function UserList({issueDetails}) {
    const dispatch=useDispatch()
    const handleAssignIssueToUser=(userId)=>{
        dispatch(assignedUserToIssue({issueId:issueDetails.id,userId}))
    }
    const {project} = useSelector(store=>store)
    // const project = useSelector((state) => state.project)

    return (
        <>
          <div className="space-y-2 bg-violet-300">
              <div className="border rounded-md bg-violet-500">
                  <p className="py-2 px-3">
                        {issueDetails.assignee?.fullName || "Unassignee"}
                  </p>
              </div>
              {project.projectDetails?.team.map((item) => (
                <div onClick={()=> handleAssignIssueToUser(item.id)}
                key={item} className="py-2 group hover:bg-violet-600 cursor-pointer flex items-center items-center space-x-4 rounded-md border px-4" >
                <Avatar>
                    <AvatarFallback>
                        {item.fullName[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-1 hover:text-white">
                    <p className="text-sm leading-none"> {item.fullName} </p>
                    <p className="text-sm "> @{item.fullName.toLowerCase()} </p>
                </div>
              </div>
              ))}
              
          </div>
        </>
    )
}

export default UserList