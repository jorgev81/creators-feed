import styles from './UserCard.module.scss';

export interface IUser {
    id: number,
    avatar: string;
    name: string;
    role: string;
    description?: string;
}

const UserCard = (props: IUser) => {
    const { id, avatar, name, role, description } = props;

    return (
        <div id={`card-${id}`} className={styles.UserCard}>
            <img className={styles.Avatar} src={avatar} alt={name} />
            <div className={styles.Content}>
                <h6 className='font-bold'>{name}</h6>
                <span>{role}</span>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};

export default UserCard;