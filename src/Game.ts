let knightPosition = [0, 0];
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
