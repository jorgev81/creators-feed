
import UserCard from "components/UserCard";
import { useLoaderData } from "react-router-dom";
import { IUser } from "components/UserCard";

const MOCKED_DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing vitae. Ut tortor pretium viverra suspendisse potenti. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Quis ipsum suspendisse ultrices gravida. Augue mauris augue neque gravida. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Tristique sollicitudin nibh sit amet commodo nulla. Sed arcu non odio euismod lacinia. Mauris rhoncus aenean vel elit scelerisque. Arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu lobortis. At imperdiet dui accumsan sit amet nulla.'

const User = () => {
    const userData = useLoaderData() as IUser;

    return (
        <UserCard
            {...userData}
            description={MOCKED_DESCRIPTION}
        />
    )
};

export default User;