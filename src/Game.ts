export default function observe(receive: (pos: number[]) => void): void {
  const randPos = (): number => Math.floor(Math.random() * 8);
  setInterval((): void => {
    receive([randPos(), randPos()]);
  }, 500);
}
