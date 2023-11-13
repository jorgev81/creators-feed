import styles from './UserCard.module.scss';

export interface IUser {
    id: number,
    avatar: string;
    name: string;
    role: string;
    description?: string;
}

const UserCard = (props: IUser) => {
    const { name, role: label, description } = props;

    return (
        <div className={styles.UserCard}>
            <img className={styles.Avatar} src={props.avatar} alt={name} />
            <div className={styles.Content}>
                <b>{name}</b>
                <span>{label}</span>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
};

export default UserCard;