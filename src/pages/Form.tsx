import "./Form.css"

const Form = () => {
    return (
        <div className="form-body">
            <input type="text" className="question" placeholder="Song Name"/>
        
            <input type="text" className="question" placeholder="Artist"/>
        
            <input type="text" className="question" placeholder="Album"/>
        
            <input type="text" className="question" placeholder="Album Cover (Image URL)"/>
            
            <div className="img-preview"> </div>

        </div>
    );
};

export default Form;