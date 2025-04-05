import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";


const SearchBox=()=>{
return(
    <div className="headersearch ml-3 mr-3">
    <input type="text" placeholder="Search For Products..." />
    <Button><IoIosSearch /></Button>
</div>
)
}

export default SearchBox;