import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './HomeAdmin.css';

const AdminHomePage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: 'What happens if we don’t finish?', replies: [] },
    { id: 2, title: 'How long do we have for the test?', replies: [] },
    { id: 3, title: 'Can you explain sexual and asexual reproduction?', replies: [] },
    { id: 4, title: 'Deadline?', replies: [] },
    { id: 5, title: 'Can you provide feedback on my recent performance?', replies: [] },
    { id: 6, title: 'Are there any opportunities for me to take on more responsibilities?', replies: [] },
    { id: 7, title: 'How will the recent changes impact my daily work?', replies: [] },
    { id: 8, title: 'What steps can I take to advance my career here?', replies: [] },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 4;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = (pageNumber) => {
    const grid = document.querySelector('.question-grid');
    grid.classList.remove('fade-in');
    grid.classList.add('fade-out');

    setTimeout(() => {
      setCurrentPage(pageNumber);
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
          const updatedQuestions = questions.map(q => {
            if (q.id === id) {
              return { ...q, replies: [...q.replies, data.replyContent] };
            }
            return q;
          });
          setQuestions(updatedQuestions);
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
          const updatedQuestions = questions.map(q => {
            if (q.id === questionId) {
              const updatedReplies = [...q.replies];
              updatedReplies[replyIndex] = data.editedReply;
              return { ...q, replies: updatedReplies };
            }
            return q;
          });
          setQuestions(updatedQuestions);
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
          const updatedQuestions = questions.map(q => {
            if (q.id === questionId) {
              const updatedReplies = q.replies.filter((_, index) => index !== replyIndex);
              return { ...q, replies: updatedReplies };
            }
            return q;
          });
          setQuestions(updatedQuestions);
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
            setQuestions(questions.filter(q => q.id !== id));
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
          <div className="question-card" key={question.id}>
            <div className="card-content" ref={dropdownRef}>
              <p>{question.title}</p>
              <div className={`dropdown ${activeDropdown === question.id ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown(question.id)}>...</button>
                <div className="dropdown-content">
                  <button onClick={() => handleReply(question.id)}>Reply</button>
                  <button onClick={() => handleSeeReply(question.id)}>See Reply</button>
                  <button onClick={() => handleDelete(question.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(questions.length / questionsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {showPopup && <div className="overlay">{popupContent}</div>}
    </div>
  );
};

export default AdminHomePage;
