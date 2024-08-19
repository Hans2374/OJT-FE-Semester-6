import { createSlice } from "@reduxjs/toolkit";

const initialQuestions = [
  { id: 1, title: 'What happens if we dont finish?', replies: [] },
  { id: 2, title: 'How long do we have for the test?', replies: [] },
  { id: 3, title: 'Can you explain sexual and asexual reproduction?', replies: [] },
  { id: 4, title: 'Deadline?', replies: [] },
  { id: 5, title: 'Can you provide feedback on my recent performance?', replies: [] },
  { id: 6, title: 'Are there any opportunities for me to take on more responsibilities?', replies: [] },
  { id: 7, title: 'How will the recent changes impact my daily work?', replies: [] },
  { id: 8, title: 'What steps can I take to advance my career here?', replies: [] },
];

export const questionSlice = createSlice({
  name: "questions",
  initialState: initialQuestions,
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const index = state.findIndex(q => q.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteQuestion: (state, action) => {
      return state.filter(q => q.id !== action.payload);
    },
    addReply: (state, action) => {
      const { questionId, reply } = action.payload;
      const question = state.find(q => q.id === questionId);
      if (question) {
        if (!question.replies) {
          question.replies = [];
        }
        question.replies.push(reply);
      }
    },
    updateReply: (state, action) => {
      const { questionId, replyIndex, newReply } = action.payload;
      const question = state.find(q => q.id === questionId);
      if (question && question.replies[replyIndex]) {
        question.replies[replyIndex] = newReply;
      }
    },
    deleteReply: (state, action) => {
      const { questionId, replyIndex } = action.payload;
      const question = state.find(q => q.id === questionId);
      if (question) {
        question.replies.splice(replyIndex, 1);
      }
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  deleteQuestion,
  addReply,
  updateReply,
  deleteReply
} = questionSlice.actions;

export const selectQuestions = (state) => state.questions;

export default questionSlice.reducer;