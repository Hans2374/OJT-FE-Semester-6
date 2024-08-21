import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import styles from './HomeAdmin.module.css';
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
    const grid = document.querySelector(`.${styles['question-grid']}`);
    grid.classList.remove(styles['fade-in']);
    grid.classList.add(styles['fade-out']);

    setTimeout(() => {
      setCurrentPage(event.selected);
      grid.classList.remove(styles['fade-out']);
      grid.classList.add(styles['fade-in']);
    }, 300);
  };

  const handleAddReply = (questionId, data) => {
    dispatch(addReply({ questionId, reply: data.newReply }));

    // Clear the input field after submitting the reply
    setValue('newReply', '');

    // Find the updated question and update the pop-up content
    const updatedQuestion = questions.find(q => q.id === questionId);
    const updatedReplies = [...updatedQuestion.replies, data.newReply];

    // Update the pop-up content to show the new reply immediately
    setPopupContent(createPopupContent({ ...updatedQuestion, replies: updatedReplies }));
  };


  const createPopupContentRef = useRef(null);

  const handleEditReply = useCallback((questionId, replyIndex) => {
    const questionToEdit = questions.find(q => q.id === questionId);
    const replyToEdit = questionToEdit.replies[replyIndex];

    // Set the default value of the textarea to the selected reply
    setValue('editedReply', replyToEdit);

    setPopupContent(
      <div className={styles.popup}>
        <h2>Edit Reply</h2>
        <form onSubmit={handleSubmit((data) => {
          dispatch(updateReply({ questionId, replyIndex, newReply: data.editedReply }));

          // Immediately update the pop-up content after editing
          const updatedQuestion = {
            ...questionToEdit,
            replies: questionToEdit.replies.map((reply, idx) =>
              idx === replyIndex ? data.editedReply : reply
            )
          };
          setPopupContent(createPopupContent(updatedQuestion));
        })}>
          <textarea
            {...register('editedReply', { required: true })}
            defaultValue={replyToEdit}  // Correctly sets the textarea content
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles['save-changes-button']}>Save Changes</button>
          <button type="button" onClick={() =>
            setPopupContent(createPopupContentRef.current(questionToEdit))
          } className={styles['cancel-button']}>Cancel</button>
        </form>
      </div>
    );
  }, [questions, styles, register, handleSubmit, dispatch, setValue]);



  const handleDeleteReply = useCallback((questionId, replyIndex) => {
    setPopupContent(
      <div className={styles.popup}>
        <h2>Delete Reply</h2>
        <p>Are you sure you want to delete this reply?</p>
        <button onClick={() => {
          dispatch(deleteReply({ questionId, replyIndex }));

          // Immediately update the pop-up content after deleting
          const updatedQuestion = {
            ...questions.find(q => q.id === questionId),
            replies: questions.find(q => q.id === questionId).replies.filter((_, idx) => idx !== replyIndex)
          };
          setPopupContent(createPopupContent(updatedQuestion));
        }} className={styles['delete-confirm-button']}>Delete</button>
        <button onClick={() => setPopupContent(createPopupContent(questions.find(q => q.id === questionId)))} className={styles['cancel-button']}>Cancel</button>
      </div>
    );
  }, [dispatch, questions, styles]);


  const createPopupContent = useCallback((question) => (
    <div className={styles.popup}>
      <h2>{question.title}</h2>
      {question.replies.length > 0 ? (
        <div className={styles['reply-list']}>
          {question.replies.map((reply, index) => (
            <div key={index} className={styles['reply-row']}>
              <p>{reply}</p>
              <div className={styles['reply-actions']}>
                <button className={styles['edit-button']} onClick={() => handleEditReply(question.id, index)}>Edit</button>
                <button className={styles['deleteReply-button']} onClick={() => handleDeleteReply(question.id, index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>There are no replies yet.</p>
      )}
      <div className={styles['reply-input-container']}>
        <input
          type="text"
          placeholder="Enter your reply"
          {...register('newReply', { required: true })}
        />
        <button className={styles['reply-button']} onClick={handleSubmit((data) => handleAddReply(question.id, data))}>Reply</button>
      </div>
      <button className={styles['close-button']} onClick={() => setShowPopup(false)}>Close</button>
    </div>
  ), [styles, register, handleSubmit, handleAddReply, handleEditReply, handleDeleteReply, setShowPopup]);


  createPopupContentRef.current = createPopupContent;

  const handleSeeReply = (id) => {
    const questionToSeeReply = questions.find(q => q.id === id);
    setPopupContent(createPopupContent(questionToSeeReply));
    setShowPopup(true);
  };

  const handleDelete = (id) => {
    setPopupContent(
      <div className={styles.popup}>
        <h2>Do you want to delete this question?</h2>
        <button
          className={styles['delete-button']}
          onClick={() => {
            dispatch(deleteQuestion(id));
            setShowPopup(false);
          }}
        >
          Delete
        </button>
        <button onClick={() => setShowPopup(false)} className={styles['cancel-button']}>Cancel</button>
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

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup && popupContent) {
      const currentQuestionId = popupContent.props.children[0].props.children;
      const updatedQuestion = questions.find(q => q.id === currentQuestionId);
      if (updatedQuestion) {
        setPopupContent(createPopupContent(updatedQuestion));
      }
    }
  }, [questions, showPopup, popupContent, createPopupContent]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Questions Admin Panel</h1>
      </div>
      <div className={styles['question-grid']}>
        {currentQuestions.map((question) => (
          <div
            className={styles['question-card']}
            key={question.id}
            onClick={() => handleSeeReply(question.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles['card-content']} ref={dropdownRef}>
              <p>{question.title}</p>
              <div className={`${styles.dropdown} ${activeDropdown === question.id ? styles.active : ''}`}>
                <button onClick={(e) => { e.stopPropagation(); toggleDropdown(question.id); }}>...</button>
                <div className={styles['dropdown-content']}>
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
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />

      {showPopup && <div className={styles.overlay}>{popupContent}</div>}
    </div>
  );
};

export default AdminHomePage;
