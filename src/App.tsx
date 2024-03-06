import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris('a', 'd', 'w', 's');
  const { board: board2, startGame: startGame2, isPlaying: isPlaying2, score: score2, upcomingBlocks: upcomingBlocks2 } = useTetris('ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown');
  
  
  return (
    <div className="app">
      <div className='misc'>
        <h2>{score}</h2>
        <h2>{score2}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button className='upcoming' onClick={() => {
            startGame();
            startGame2();
          }}>New Game</button>
        )}
        {isPlaying2 ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks2} />
        ) : (
          <div className="upcoming"></div>
        )}
      </div>
      <Board currentBoard={board} />
      <Board currentBoard={board2} />
      
    </div>
  );
}

export default App;
