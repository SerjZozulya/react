import s from "./Notes.module.css"

const Notes = () => {
    return <div className={s.notes}>
        <textarea className={s.textField}/>
    </div>
}

export default Notes