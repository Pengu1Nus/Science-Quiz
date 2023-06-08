import React from 'react';

const StartScreen = ({ numQuestion, dispatch }) => {
  return (
    <div className="start">
      <h2>Добро пожаловать на Квиз по Политологии!</h2>
      <h3>{numQuestion} Вопросов для проверки Ваших знаний</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Старт
      </button>
    </div>
  );
};

export default StartScreen;
