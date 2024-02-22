import "./Form.css"
import Card from "../components/Card";
import { useRef } from "react";

const Form = () => {
    const song = useRef(null);
    const artist = useRef(null);
    const album = useRef(null);
    const albumCover = useRef(null);

    const createPreview = () => {
        const cardPreview = `<Card />`
    }

    /* *************On Click handlers************** */
    const handleFormBtn = (btn: string) => {
        if (btn == "add") {
            handleAddSong(); // update if parameters added
        } else {
            handlePreview();
        }
    }

    const handlePreview = () => {
        song.current.focus();
        artist.current.focus();
        album.current.focus();
        albumCover.current.focus();
    }
    
    // ********************* Implement this *******************
    const handleAddSong = () => {

    }

    return (
        <div className="form-body">
            <p className="title">Add a Song</p>
            <div className="row">
                <input 
                    type="text" 
                    className="question" 
                    placeholder="Song Name"
                    ref={song}
                    required/>
            
                <input 
                    type="text" 
                    className="question" 
                    placeholder="Artist"
                    ref={artist}
                    required/>
            </div>
        
            <input 
                type="text" 
                className="question" 
                placeholder="Album"
                ref={album}
                required/>
        
            <input 
                type="text" 
                className="question" 
                placeholder="Album Cover (Image URL)"
                ref={albumCover}
                required/>
            
            
            <div className="cardPreview"> </div>

            <div className="form-btns row">
                <button className="form-btn" onClick={() => handleFormBtn("preview")}>
                    Preview
                </button>

                <button className="form-btn" onClick={() => handleFprmBtn("add")}>
                    Add Song
                </button>
            </div>

        </div>

    );
};

export default Form;