
const GifGridItem = ({ gif: { title, url } }) => {

    return <div className="card animate__animated animate__bounce animate__fadeInDown">
        <img alt={ title } src={ url } />
        <p> { title } </p>
    </div>

}

export default GifGridItem;