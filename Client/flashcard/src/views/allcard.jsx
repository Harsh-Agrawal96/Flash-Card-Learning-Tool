import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../public/css/allcard.css";
import { queryAdminCard } from "../backendApicall/querycard";
import { deleteCardQuery, updateCardQuery } from "../backendApicall/cardCrud";
import { unknownError as Err, loginError as logErr } from '../utils/responses';
import MessageDisplay from "./partials/responseMessage";

const AllCards = () => {

  const [objectiveCards, setObjectiveCards] = useState([]);
  const [mcqCards, setMcqCards] = useState([]);
  const [currentType, setCurrentType] = useState("objective");
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, type: "" });
  const [updateModal, setUpdateModal] = useState({
    show: false,
    id: null,
    question: "",
    answer: "",
    options: { optionA: "", optionB: "", optionC: "", optionD: "" },
    correct: "",
    type: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { message, type } = location.state || {};
  
  useEffect(() => {

    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
    if (!token || !userDetails) {
      navigate('/', { state : { message : logErr, type : 'msg'}});
    }

    const feachData = async (id) => {
      try{
        const formData = { adminId : id }
  
        const cards = await queryAdminCard(formData);
        setObjectiveCards( cards.msg.objs || [] );
        setMcqCards( cards.msg.mcqs || [] );
      }catch(err){
        navigate('/', { state : { message : Err, type : 'error'}});
      }
    }
  
    feachData(userDetails.msg._id);

  }, [navigate]);
  
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const deleteCard = async () => {
    try{
      let type = -1;
      if (deleteModal.type === "objective") {
        type = 2;
      } else {
        type = 1;
      }

      const formData = {
        id : deleteModal.id,
        key : userDetails.msg.securityKey,
        questype : type,
        adminId : userDetails.msg._id
      };
      setDeleteModal({ show: false, id: null, type: "" });

      const resData = await deleteCardQuery(formData);

      navigate('/allcards', { state : { message : resData.msg, type : 'success'}, replace : true,key: Date.now(), });
      window.location.reload();
    }catch(err){
      let errorMessages = [];
      try {
        errorMessages = JSON.parse(err.message);
      } catch {
        errorMessages = Err;
      }
      navigate('/allcards',{ state : { message : errorMessages, type : 'error'}, replace : true,key: Date.now(), });
      window.location.reload();
    }
  };

  const updateCard = async () => {
    try{
      let type = -1;

      if (updateModal.type === "objective") {
        type = 2;
      } else {
        type = 1;
      }

      const formData = {
        id : updateModal.id,
        ans : updateModal.answer,
        que : updateModal.question,
        questype : type,
        options : updateModal.options,
        mcqans : updateModal.correct,
        key : userDetails.msg.securityKey,
        adminId : userDetails.msg._id
      }
      setUpdateModal({
        show: false,
        id: null,
        question: "",
        answer: "",
        options: { a: "", b: "", c: "", d: "" },
        correct: "",
        type: "",
      });

      const resData = await updateCardQuery(formData);

      navigate('/allcards', { state : { message : resData.msg, type : 'success'}, replace : true,key: Date.now(), });
      window.location.reload();
    }catch(err){
      let errorMessages = [];
      try {
        errorMessages = JSON.parse(err.message);
      } catch {
        errorMessages = Err;
      }
      navigate('/allcards',{ state : { message : errorMessages, type : 'error'}, replace : true,key: Date.now(), });
      window.location.reload();
    }
  };

  return (
    <div className="all-cards-container">
      { location.state?.message && ( 
        <MessageDisplay iniMessage={message} iniMessageType={type} />
      )}
      <div className="toggle-buttons">
        <button
          className={currentType === "objective" ? "active" : ""}
          onClick={() => setCurrentType("objective")}
        >
          Objective Cards
        </button>
        <button
          className={currentType === "mcq" ? "active" : ""}
          onClick={() => setCurrentType("mcq")}
        >
          MCQ Cards
        </button>
      </div>

      {currentType === "objective" && (
        <div className="cards-grid">
          {objectiveCards.map((card) => (
            <div key={card.id} className="card">

              <div className="uniqueId" >
                <p><span>ID:</span> {card._id}</p>
              </div>
              <div>
                <p><span>Question:</span> {card.Question}</p>
              </div>
              <div>
                <p><span>Answer:</span> {card.Answer}</p>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => setDeleteModal({ show: true, id: card._id, type: "objective" })}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    setUpdateModal({
                      show: true,
                      id: card._id,
                      question: card.Question,
                      answer: card.Answer,
                      type: "objective",
                    })
                  }
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentType === "mcq" && (
        <div className="cards-grid">
          {mcqCards.map((card) => (
            <div key={card._id} className="card">
              <div className="uniqueId" >
                <p><span>ID:</span>{card._id}</p>
              </div>
              <div>
                <p><span>Question:</span> {card.Question}</p>
              </div>
              <div>
                <span>Options:</span>
                <ul>
                  <li>a: {card.ChooseA}</li>
                  <li>b: {card.ChooseB}</li>
                  <li>c: {card.ChooseC}</li>
                  <li>d: {card.ChooseD}</li>
              </ul>
              </div>
              <div>
                <p><span>Answer:</span> {card.answerOption}</p>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => setDeleteModal({ show: true, id: card._id, type: "mcq" })}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    setUpdateModal({
                      show: true,
                      id: card._id,
                      question: card.Question,
                      options: { optionA : card.optionA, optionB : card.optionB, optionC : card.optionC, optionD : card.optionD },
                      correct: card.answerOption,
                      type: "mcq",
                    })
                  }
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {deleteModal.show && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this card?</p>
            <div className="modal-actions">
              <button onClick={deleteCard}>Yes</button>
              <button onClick={() => setDeleteModal({ show: false, id: null, type: "" })}>No</button>
            </div>
          </div>
        </div>
      )}

      {updateModal.show && (
        <div className="modal">
          <div className="modal-content">
            <p>Update Card</p>
            <div className="modal-body">
              <div>
                <label>New Question:</label>
                <textarea
                  className="textinput"
                  value={updateModal.question}
                  onChange={(e) => setUpdateModal({ ...updateModal, question: e.target.value })}
                />
              </div>
              {updateModal.type === "objective" ? (
                <>
                  <div>
                    <label>New Answer:</label>
                    <textarea
                      className="textinput"
                      value={updateModal.answer}
                      onChange={(e) => setUpdateModal({ ...updateModal, answer: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <label id="showingOption" >New Options:</label>
                  {["optionA", "optionB", "optionC", "optionD"].map((opt) => (
                    <div key={opt}>
                      <label>{opt.toUpperCase()}:</label>
                      <input
                        type="text"
                        value={updateModal.options[opt]}
                        onChange={(e) =>
                          setUpdateModal({
                            ...updateModal,
                            options: { ...updateModal.options, [opt]: e.target.value },
                          })
                        }
                      />
                    </div>
                  ))}
                  <div>
                    <label>New Correct Answer:</label>
                    <select
                    name="correctAnswer"
                    value={updateModal.correct}
                    onChange={(e) => {
                      const { value } = e.target;
                      setUpdateModal((prevData) => ({ ...prevData, correct : value }));
                    }}
                  >
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                  </select>
                  </div>
                </>
              )}
            </div>
            <div className="modal-actions">
              <button onClick={updateCard}>Save</button>
              <button
                onClick={() =>
                  setUpdateModal({
                    show: false,
                    id: null,
                    question: "",
                    answer: "",
                    options: { optionA: "", optionB: "", optionC: "", optionD: "" },
                    correct: "",
                    type: "",
                  })
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCards;
