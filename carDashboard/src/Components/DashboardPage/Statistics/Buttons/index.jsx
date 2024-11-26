import React, { useState } from 'react';

const SlidingToggle = () => {
  const [selected, setSelected] = useState('Day');

  const options = ['Day', 'Week', 'Month'];

  // Dynamically calculate the position of the sliding background
  const getPosition = () => {
    switch (selected) {
      case 'Day':
        return '0%';
      case 'Week':
        return '33.33%';
      case 'Month':
        return '66.66%';
      default:
        return '0%';
    }
  };

  return (
    <div style={styles.container}>
      {/* Sliding Background */}
      <div
        style={{
          ...styles.slider,
          left: getPosition(),
        }}
      ></div>

      {/* Toggle Options */}
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          style={{
            ...styles.button,
            color: selected === option ? '#fff' : '#555',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    borderRadius: '25px',
    backgroundColor: '#f5f5f5',
    width: '300px',
    height: '40px',
    overflow: 'hidden',
  },
  slider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '33.33%',
    backgroundColor: '#ff7043', // Orange background
    borderRadius: '25px',
    transition: 'left 0.3s ease', // Smooth slide animation
  },
  button: {
    flex: 1,
    border: 'none',
    background: 'none',
    color: '#555',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    zIndex: 1, // Ensure buttons appear above the slider
  },
};

export default SlidingToggle;
