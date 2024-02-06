import "./Form.css"

const Form = () => {
    return (
        <>
        <div className="form-body">
            <label htmlFor="song-name">Song Name</label>
            <input type="text" id="song-name"/>
            
            <label htmlFor="song-artist">Artist</label>
            <input type="text" id="song-artist"/>
            
            <label htmlFor="song-album">Album</label>
            <input type="text" id="song-album"/>
            
            <label htmlFor="song-album-img">Album Cover</label>
            <input type="text" id="song-album-img"/>
            
            <label htmlFor="song-album-img-prev">Album Cover Preview</label>
            <div className="img-preview">

            </div>
        </div>
        </>
    );
};

export default Form;