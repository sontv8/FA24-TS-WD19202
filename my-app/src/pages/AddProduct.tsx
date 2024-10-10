const AddProduct = ({onHandleSubmit, onHandleChange}) => {

    
    
    return <div>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={onHandleSubmit}>
            <div className="form-group">
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" name='name' onInput={onHandleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Giá sản phẩm</label>
                <input type="text" name='price' onInput={onHandleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="">Ảnh sản phẩm</label>
                <input type="text"  name='image' onInput={onHandleChange}/>
            </div>
            <button>Thêm mới sản phẩm</button>
        </form>
    </div>
}

export default AddProduct