
let AddUpdateComp = () => {


    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    });
    const [questype, setquestype ] = useState('');
    const [ options, setoptions ] = useState({
        optionA : '',
        optionB : '', 
        optionC : '', 
        optionD : ''
    })
    const [mcqans, setmcqans] = useState('');
    const [key, setKey] = useState('');

    const handleQuesType = async (e) =>{
        setquestype(e.target.value);
    }
    
    const handleMcqAns = async ( e ) => {
        setmcqans(e.target.value);
    }
    
    const handleOptoinsChange = async (e) => {
    
        const { name, value } = e.target;
        setoptions({
            ...options,
            [name] : value
        })
    }
    
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea
                    type="text"
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="answer">Select question type :</label>
                <select className="card_numbers" name='quesType' value={questype} onChange={handleQuesType}>
                    <option value="" disabled>Select</option>
                    <option value="1">Mcqa type questions</option>
                    <option value="2">objective type questins</option>
                </select>
            </div>

            { questype == 1 && (
      
                <div>
                    <div className="form-group">
                        <label htmlFor="answer">Option A:</label>
                        <input
                            type="text"
                            name="optionA"
                            value={options.optionA}
                            onChange={handleOptoinsChange} 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="answer">Option B:</label>
                        <input
                            type="text"
                            name="optionB"
                            value={options.optionB}
                            onChange={handleOptoinsChange} 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="answer">Option C:</label>
                        <input
                            type="text"
                            name="optionC"
                            value={options.optionC}
                            onChange={handleOptoinsChange} 
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="answer">Option D:</label>
                        <input
                            type="text"
                            name="optionD"
                            value={options.optionD}
                            onChange={handleOptoinsChange}  
                            required
                        />
                    </div>
                </div>
            )}

            {  questype == 2 && (
                <div className="form-group">
                    <label htmlFor="answer">Answer:</label>
                    <textarea
                        type="text"
                        id="answer"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}  
                        required
                    />
                </div>
            )}

            {  questype == 1 && (
                <div className="form-group">
                    <label htmlFor="answer">Answer :</label>
                    <select className="card_numbers" value={mcqans} name='mcqTypeAnswer' onChange={handleMcqAns}>
                        <option value="" disabled>Select option</option>
                        <option value="A">option A</option>
                        <option value="B">option B</option>
                        <option value="C">option C</option>
                        <option value="D">option D</option>
                </select>
                </div>
            )}

                <div className="input-group">
                <label htmlFor="securityKey">Key:</label>
                <input
                    type="number"
                    name="key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    required
                />
            </div>
        </>
    );
}


export default AddUpdateComp