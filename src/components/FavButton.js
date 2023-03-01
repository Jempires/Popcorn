import heart from './images/heart.png';
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
    //console.log(favArray);

    return(
        // Empty div, helps with styling so you're not limited to the divs. helps contain return 
        <div>
        {/*console.log(favArray)*/}
        {/* Validates if the favorites movie is already in the fav array. Helps grab correct class */}
        {favArray.findIndex(arrayObject => arrayObject.id === singleMovie.id) > -1 ? 

        // delete fav
        <img src={heart} alt='heart icon' className="delFav" onClick={(e) => handleClick(e, 'delete')} /> :
        // // Add favorite
        <img src={heart} alt='heart icon' className="addFav" onClick={(e) => handleClick(e, 'add')} /> 
        }
        
        </div>
    );

}

export default FavButton;