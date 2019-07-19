let knightPosition = [1, 7];
let observer: (pos: number[]) => void;

function emitChange(): void {
  observer(knightPosition);
}

export function observe(o: (pos: number[]) => void): void {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX: number, toY: number): void {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX: number, toY: number): boolean {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1)
    || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
