import { useState } from "react"
import { v4 } from 'uuid'

const Edit = (props) => {
    const [note, setNote] = useState("")
    function noteChange(e) {
        setNote(e.target.value)
    }
    const [date, setDate] = useState("")
    function dateChange(e) {
        setDate(e.target.value)
    }
    const [time, setTime] = useState("")
    function timeChange(e) {
        setTime(e.target.value)
    }
    function addItem() {
        props.submittingStatus.current = true
        props.add(function (prevData) {
            return (
                [...prevData, {
                    id: v4(),
                    note,
                    date,
                    time
                }]
            )
        })
    }

    return <div>
        <h1>Note</h1>
        <p>write:</p>
        <input type='test' value={note} onChange={noteChange} />
        <p>date:</p>
        <input type='date' value={date} onChange={dateChange} />
        <p>time:</p>
        <input type='time' value={time} onChange={timeChange} />
        <button className="add" onClick={addItem} >new</button>
    </div>
}

export default Edit