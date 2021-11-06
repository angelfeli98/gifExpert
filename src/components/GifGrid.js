
import GifGridItem from "./GifGridItem";
import useFethcGif from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { data, loading } = useFethcGif(category);

    return <>
        <h3>  { category } </h3>
        { loading && <div className="animate__flash">  <p> Cargando </p> </div> }
        <div className="cardGrid">
        { data.map( gif => <GifGridItem key={ gif.id } gif={ gif } /> ) }    
        </div>
    </>
}

/*
    
*/

export default GifGrid;