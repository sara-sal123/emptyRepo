function Conditions({ name, size = 4 }) {

    return (
        <>
            {
                size > 9 ?
                    <div>bigger</div> :
                    <div>smaller</div>
            }
            {name && <div>name is: {name}</div>}
        </>
    )
}

export default Conditions
