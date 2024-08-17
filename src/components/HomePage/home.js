import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './home.css';

const HomePage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: 'What happens if we don’t finish?' },
    { id: 2, title: 'How long do we have for the test?' },
    { id: 3, title: 'Can you explain sexual and asexual reproduction?' },
    { id: 4, title: 'Deadline?' },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const handleUpdate = (id) => {
    const questionToUpdate = questions.find(q => q.id === id);
    setValue('questionTitle', questionToUpdate.title); // Set the initial value for the form
    setPopupContent(
      <div className="popup">
        <h2>Update Question</h2>
        <form onSubmit={handleSubmit((data) => {
          setQuestions(
            questions.map(q =>
              q.id === id ? { ...q, title: data.questionTitle } : q
            )
          );
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

  const handleAddQuestion = () => {
    setPopupContent(
      <div className="popup">
        <h2>Add a New Question</h2>
        <form onSubmit={handleSubmit((data) => {
          if (data.newQuestionTitle.trim() !== '') {
            const newQuestion = { id: questions.length + 1, title: data.newQuestionTitle };
            setQuestions([...questions, newQuestion]);
            setShowPopup(false);
            reset(); // Reset the form after adding
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

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
      <button className="add-question-button" onClick={handleAddQuestion}>
        Have a question?
      </button>
      <div className="question-grid">
        {questions.map((question) => (
          <div className="question-card" key={question.id} style={{ backgroundColor: getRandomColor() }}>
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
