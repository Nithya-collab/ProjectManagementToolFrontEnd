// import {Card} from '@/components/ui/card'
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { TrashIcon } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// function CommentCard (){
//     return (
//         <Card className="flex justify-between">
//           <div className='flex items-center gap-4'>
//                <Avatar>
//                     <AvatarFallback className='bg-violet-400 text-white'>Z</AvatarFallback>
//                </Avatar>
            
//             <div className='space-y-1'>
//                 <p> Code with zosh </p>
//                 <p> how much work is pending </p>
//             </div>
                  
//           </div>
//           <Button className="rounded-full" variant="ghost" size="icon">
//               <TrashIcon/>
//           </Button>
//         </Card>
//     )
// }

// export default CommentCard;









import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { TrashIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { deleteComment } from '@/Redux/Comment/Action'

function CommentCard({item}) {
  const dispatch = useDispatch()

  const handleDelete = () => {
     dispatch(deleteComment(item.id))
  }

  return (
    <div className="flex items-start justify-between p-3">
      {/* Left section: Avatar + Content */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-violet-400 text-white">{item.user.fullName[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <p className="font-medium">Code with zosh</p>
          <p className="text-sm text-muted-foreground">{item.content}</p>
        </div>
      </div>

      {/* Delete button */}
      <Button onClick={handleDelete} variant="ghost" size="icon" className="rounded-full">
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CommentCard

