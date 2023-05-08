import React, { useState } from 'react';
import './App.css';

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState([
    { emoji: '😀', count: 0 },
    { emoji: '😁', count: 0 },
    { emoji: '😂', count: 0 },
    { emoji: '🤣', count: 0 },
    { emoji: '😃', count: 0 },
  ]);

  const [winner, setWinner] = useState(null);

  const handleEmojiClick = (index) => {
    const newEmojis = [...emojis];
    newEmojis[index].count += 1;
    setEmojis(newEmojis);
  };

  const showResults = () => {
    const maxVotes = Math.max(...emojis.map((emoji) => emoji.count));
    const winningEmoji = emojis.find((emoji) => emoji.count === maxVotes);
    setWinner(winningEmoji);
  };

  return (
    <div className="emoji-voting">
      <h1>Emoji Voting</h1>
      <div className="emoji-list">
        {emojis.map((emoji, index) => (
          <button
            key={emoji.emoji}
            onClick={() => handleEmojiClick(index)}
            className="emoji-btn"
          >
            {emoji.emoji} ({emoji.count})
          </button>
        ))}
      </div>
      <button onClick={showResults} className="show-results-btn">
        Show Results
      </button>
      {winner && (
        <h2>
          Winning Emoji: {winner.emoji} with {winner.count} votes
        </h2>
      )}
    </div>
  );
};

export default EmojiVoting;





