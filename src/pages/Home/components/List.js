import Item from "./Item"

const List = (props) => {
    console.log(props.listData)
    return <div className="list" >
        {
            props.listData.map((item) => {
                const { id, note, date, time } = item
                return <Item key={id} id={id} note={note} date={date} time={time} deleteData={props.deleteData} submittingStatus={props.submittingStatus} />
            })
        }
    </div>
}

export default List