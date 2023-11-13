import UserCard, { IUser } from "components/UserCard";
import { Link, useLoaderData } from "react-router-dom";

const Feed = () => {
    const users = useLoaderData() as IUser[];

    return (
        <>
            {users.map((user) => (
                <Link
                    to={`user/${user.id}`}
                    key={user.id}
                    className="text-black no-underline hover:underline"
                >
                    <UserCard
                        {...user}
                    />
                </Link>
            ))}
        </>
    )
};

export default Feed;