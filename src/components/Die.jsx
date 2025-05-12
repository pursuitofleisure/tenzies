function Die({ id, value, isHeld, holdDie }) {
  const arrClasses = [];
  /* Base classes */
  arrClasses.push('die-btn');
  /* Conditional classes */
  isHeld && arrClasses.push('die-btn-held');
  /* All classes */
  const classes = arrClasses.join(' ');

  return (
    <button
      onClick={() => holdDie(id)}
      className={classes}
      aria-label={`Die with value ${value}, 
      ${isHeld ? 'held' : 'not held'}`}
    >
      {value}
    </button>
  );
}

export default Die;
