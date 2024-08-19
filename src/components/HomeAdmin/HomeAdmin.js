import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import './HomeAdmin.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestions, deleteQuestion, addReply, updateReply, deleteReply } from '../../features/questionSlice';

const AdminHomePage = () => {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

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

  const handleReply = (id) => {
    const questionToReply = questions.find(q => q.id === id);
    setValue('replyContent', '');
    setPopupContent(
      <div className="popup">
        <h2>{questionToReply.title}</h2>
        <form onSubmit={handleSubmit((data) => {
          dispatch(addReply({ questionId: id, reply: data.replyContent }));
          setShowPopup(false);
        })}>
          <textarea
            {...register('replyContent', { required: true })}
            placeholder="Enter your reply"
          ></textarea>
          <button type="submit">Post Reply</button>
          <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
        </form>
      </div>
    );
    setShowPopup(true);
  };

  const handleEditReply = (questionId, replyIndex) => {
    const questionToEdit = questions.find(q => q.id === questionId);
    const replyToEdit = questionToEdit.replies[replyIndex];

    setPopupContent(
      <div className="popup">
        <h2>Edit Reply</h2>
        <form onSubmit={handleSubmit((data) => {
          dispatch(updateReply({ questionId, replyIndex, newReply: data.editedReply }));
          setShowPopup(false);
        })}>
          <textarea
            {...register('editedReply', { required: true })}
            defaultValue={replyToEdit}
          ></textarea>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
        </form>
      </div>
    );
    setShowPopup(true);
  };

  const handleDeleteReply = (questionId, replyIndex) => {
    setPopupContent(
      <div className="popup">
        <h2>Delete Reply</h2>
        <p>Are you sure you want to delete this reply?</p>
        <button onClick={() => {
          dispatch(deleteReply({ questionId, replyIndex }));
          setShowPopup(false);
        }}>Delete</button>
        <button onClick={() => setShowPopup(false)}>Cancel</button>
      </div>
    );
    setShowPopup(true);
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
                <div className="reply-actions">
                  <button onClick={() => handleEditReply(id, index)}>Edit</button>
                  <button onClick={() => handleDeleteReply(id, index)}>Delete</button>
                </div>
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
        <h1>Questions Admin Panel</h1>
      </div>
      <div className="question-grid">
        {currentQuestions.map((question) => (
          <div
            className="question-card"
            key={question.id}
            onClick={() => handleSeeReply(question.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-content" ref={dropdownRef}>
              <p>{question.title}</p>
              <div className={`dropdown ${activeDropdown === question.id ? 'active' : ''}`}>
                <button onClick={(e) => { e.stopPropagation(); toggleDropdown(question.id); }}>...</button>
                <div className="dropdown-content">
                  <button onClick={(e) => { e.stopPropagation(); handleReply(question.id); }}>Reply</button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(question.id); }}>Delete</button>
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

export default AdminHomePage;