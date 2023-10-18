import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import { AiFillHeart } from "react-icons/ai";
import useCurrentUser from "@/hooks/useCurrentUser";



interface CommentItemProps {
  data: Record<string, any>
  userId?: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ data, userId }) => {
  const router = useRouter()

  const goToUser = useCallback((event: any) => {
    event.stopPropagation()

    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id])

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null
    }

    return formatDistanceToNowStrict(new Date(data.createdAt))
  }, [data?.createdAt])
   
  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div  className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
        <div className="flex flex-col gap-2">
            <p
              onClick={goToUser}
              className="text-white font-semibold cursor-pointer hover:underline"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="text-neutral-500 cursor-pointer hover:underline hidden md:block -mt-3 text-sm "
            >
              @{data.user.username}
            </span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
          <span className="text-neutral-500 text-sm -mt-2">{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;