const gameWinner = (game) => (game.hscore > game.ascore ? `${game.hteam} ${game.hgoals}.${game.hbehinds} ${game.hscore} def ${game.ateam} ${game.agoals}.${game.abehinds} ${game.ascore} ` : `${game.ateam} ${game.agoals}.${game.abehinds} ${game.ascore} def ${game.hteam} ${game.hgoals}.${game.hbehinds} ${game.hscore} `);

export default gameWinner;
