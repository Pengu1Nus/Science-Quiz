import React from 'react';

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '😉';
  if (percentage >= 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>Вы набрали <strong>{points}</strong> очков из{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Лучший результат: {highscore} очков)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Рестарт
      </button>
    </>
  );
}

export default FinishScreen;
