import heartIcon from './images/heart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, deleteFromFavorites } from '../features/favorites/favSlice';

const FavButton = ({favs, singleMovie }) => {

    // favorites and items need to be same as what is in the store and slice components 
    const favArray = useSelector((state) => state.favorites.favItems);

    // dispatch calls in add and remove (redux function)
    const dispatch = useDispatch();

    const handleClick = (e, type) => {
        e.preventDefault();
        
        if(type === 'delete') {
            // DISPATCHING FROM SLICE.targeting the item from the array
            dispatch(deleteFromFavorites(singleMovie));
        }else if(type === 'add') {
            dispatch(addToFavorites(singleMovie));
        }
    };
    console.log(favArray);

    return(
        // Empty div, helps with styling so you're not limited to the divs. helps contain return 
        <>
        {console.log(favArray)}
        {/* Validates if the favorites movie is already in the fav array. Helps grab correct class */}
        {/* if index is greater than -1, it meansit exists so show remove/add icon */}
        {/* ? is error checking if array is null */}
        {favArray.findIndex(arrayObject => arrayObject.id === singleMovie.id) > -1 ? 

        // delete fav
        <img src={heartIcon} alt='heart icon' className="delFav" onClick={(e) => handleClick(e, 'delete')} /> :
        // // Add favorite
        <img src={heartIcon} alt='heart icon' className="addFav" onClick={(e) => handleClick(e, 'add')} /> 
        }
        
        </>
    );

}

export default FavButton;