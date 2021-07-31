import './Search.css'
const Search = ({setValueSearch, placeholder}) => {
    const onChangeValueSearch = (e) => {
        setValueSearch(e.target.value)
    }
    return (
        <div className='searchBlock'>
            <input onChange={onChangeValueSearch} type="text" placeholder={placeholder}/>
        </div>
    )
}
export default Search