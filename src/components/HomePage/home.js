import React, { useState, useEffect, useRef } from 'react';
import './home.css';

const HomePage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: 'What happens if we don’t finish?' },
    { id: 2, title: 'How long do we have for the test?' },
    { id: 3, title: 'Can you explain sexual and asexual reproduction?' },
    {id:4, title: 'Deadline?'},
    // Thêm các câu hỏi khác ở đây
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleUpdate = (id) => {
    setPopupContent(
      <div className="popup">
        <h2>Update Question</h2>
        <input type="text" defaultValue={questions.find(q => q.id === id).title} />
        <button onClick={() => setShowPopup(false)}>Save</button>
        <button onClick={() => setShowPopup(false)}>Cancel</button>
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
      <h1>Questions for the group?</h1>
      <div className="question-grid">
        {questions.map((question) => (
          <div className="question-card" key={question.id}>
            <div className="card-content" ref={dropdownRef}>
              <p>{question.title}</p>
              <div className={`dropdown ${activeDropdown === question.id ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown(question.id)}>...</button>
                <div className="dropdown-content">
                  <button onClick={() => handleUpdate(question.id)}>Update</button>
                  <button onClick={() => handleDelete(question.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && <div className="overlay">{popupContent}</div>}
    </div>
  );
};

export default HomePage;
