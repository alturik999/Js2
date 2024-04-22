"use strict";



const reviewsContainer = document.getElementById('reviewsContainer');
const reviewInput = document.getElementById('reviewInput');
const addReviewButton = document.getElementById('addReview');

const initialData = [
  'Отзыв 1: Первый отзыв отзыв.',
  'Отзыв 2: Второй отзыв отзыв.',
];

// Загрузка начальных данных
initialData.forEach(review => {
  addReviewToContainer(review);
});

addReviewButton.addEventListener('click', () => {
  const reviewText = reviewInput.value;
  
  try {
    validateReviewLength(reviewText);
    addReviewToContainer(`Новый отзыв: ${reviewText}`);
    reviewInput.value = ''; // Очистить текстовое поле
  } catch (error) {
    alert(error.message);
  }
});

function validateReviewLength(text) {
  if (text.length < 50 || text.length > 500) {
    throw new Error('Отзыв должен содержать от 50 до 500 символов.');
  }
}

function addReviewToContainer(reviewText) {
  const newReview = document.createElement('div');
  newReview.textContent = reviewText;
  reviewsContainer.appendChild(newReview);
}
