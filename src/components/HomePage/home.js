import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestions, addQuestion, updateQuestion, deleteQuestion } from '../../features/questionSlice';

const HomePage = () => {
  const questions = useSelector(selectQuestions);
  console.log('Questions in HomePage:', questions);
  const dispatch = useDispatch();

  const userState = useSelector((state)=> state.user.user)

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 4;

  const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  console.log("AAA", userState)

  const handlePageClick = (event) => {
    const grid = document.querySelector('.question-grid');
    grid.classList.remove('fade-in');
    grid.classList.add('fade-out');

    setTimeout(() => {
      setCurrentPage(event.selected);
      grid.classList.remove('fade-out');
      grid.classList.add('fade-in');
    }, 300);
  };

  const handleSeeReply = (id) => {
    const questionToSeeReply = questions.find(q => q.id === id);
    setPopupContent(
      <div className="popup">
        <h2>Replies for: {questionToSeeReply.title}</h2>
        {questionToSeeReply.replies.length > 0 ? (
          <div className="reply-list">
            {questionToSeeReply.replies.map((reply, index) => (
              <div key={index} className="reply-row">
                <p>{reply}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>There are no replies yet.</p>
        )}
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    );
    setShowPopup(true);
  };

  const handleUpdate = (id) => {
    const questionToUpdate = questions.find(q => q.id === id);
    setValue('questionTitle', questionToUpdate.title);
    setPopupContent(
      <div className="popup">
        <h2>Update Question</h2>
        <form onSubmit={handleSubmit((data) => {
          dispatch(updateQuestion({ ...questionToUpdate, title: data.questionTitle }));
          setShowPopup(false);
        })}>
          <input
            type="text"
            {...register('questionTitle', { required: true })}
          />
          <button type="submit">Save</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </form>
      </div>
    );
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    setPopupContent(
      <div className="popup">
        <h2>Do you want to delete this question?</h2>
        <button
          className="delete-button"
          onClick={() => {
            dispatch(deleteQuestion(id));
            setShowPopup(false);
          }}
        >
          Delete
        </button>
        <button onClick={() => setShowPopup(false)}>Cancel</button>
      </div>
    );
    setShowPopup(true);
  };

  const handleAddQuestion = () => {
    setPopupContent(
      <div className="popup">
        <h2>Add a New Question</h2>
        <form onSubmit={handleSubmit((data) => {
          if (data.newQuestionTitle.trim() !== '') {
            const newQuestion = { id: Date.now(), title: data.newQuestionTitle, replies: [] };
            dispatch(addQuestion(newQuestion));
            setShowPopup(false);
            reset();
          } else {
            alert('Question cannot be empty');
          }
        })}>
          <input
            type="text"
            placeholder="Enter your question"
            {...register('newQuestionTitle', { required: true })}
          />
          <button type="submit">Save</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </form>
      </div>
    );
    setShowPopup(true);
  };

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Questions for the group?</h1>
        <button className="add-question-button" onClick={handleAddQuestion}>
          Have a question?
        </button>
      </div>
      <div className="question-grid fade-in">
        {currentQuestions.map((question) => (
          <div className="question-card" key={question.id} style={{ backgroundColor: '#F08080' }}>
            <div className="card-content" ref={dropdownRef}>
              <p>{question.title}</p>
              <div className={`dropdown ${activeDropdown === question.id ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown(question.id)}>...</button>
                <div className="dropdown-content">
                  <button onClick={() => handleSeeReply(question.id)}>See Reply</button>
                  <button onClick={() => handleUpdate(question.id)}>Update</button>
                  <button onClick={() => handleDelete(question.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />

      {showPopup && <div className="overlay">{popupContent}</div>}
    </div>
  );
};

export default HomePage;