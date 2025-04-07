const quantityBox = () => {
    return (
        <div className="quantityDrop d-flex align-items-center">
            <Button><FaMinus /></Button>
            <input type="text" />
            <Button><FaPlus /></Button>
        </div>
    )
}

export default quantityBox;