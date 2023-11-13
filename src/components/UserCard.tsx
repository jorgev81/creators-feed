import styles from './UserCard.module.scss';

export interface IUser {
    id: number,
    avatar: string;
    name: string;
    role: string;
    description?: string;
}

const UserCard = (props: IUser) => {
    const { name, role, description } = props;

    return (
        <div className={styles.UserCard}>
            <img className={styles.Avatar} src={props.avatar} alt={name} />
            <div className={styles.Content}>
                <h6 className='font-bold'>{name}</h6>
                <span>{role}</span>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};

export default UserCard;