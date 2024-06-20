function knightMoves(start, end) {

    const moves = [
      [1, 2], [2, 1], [1, -2], [-2, 1],
      [2, -1], [-1, 2], [-1, -2], [-2, -1],
    ];

    const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const bfs = (start, end) => {
      const queue = [[start, [start]]];
      const visitedSquares = new Set([start.toString()]);
  
      while (queue.length > 0) {
        const [[x, y], path] = queue.shift();

        if (x === end[0] && y === end[1]) {
          return path;
        }

        for (const [dx, dy] of moves) {
          const newX = x + dx;
          const newY = y + dy;
          const newPos = [newX, newY];
  
          if (isValid(newPos) && !visitedSquares.has(newPos.toString())) {
            queue.push([newPos, [...path, newPos]]);
            visitedSquares.add(newPos.toString());
          }
        }
      }

      return [];
    };
  
    return bfs(start, end);
  }

  console.log(knightMoves([0, 0], [7, 7]));
  