import styles from "./teamCareerBtn.module.css"

export default function TeamCareerBtn ({ children, onClick }) {
    return (
        <button onClick={onClick} className={styles.teamCareerBtn}>
            {children}
        </button>
    )
}