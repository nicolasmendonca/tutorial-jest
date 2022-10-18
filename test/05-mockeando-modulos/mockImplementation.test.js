function log(...args) {
  const DISPLAY_LOG = false;

  if (!DISPLAY_LOG) return;
  console.log(...args);
}

test("mockImplementation", () => {
  const myMock = () => {}; // TODO

  Array(5)
    .fill(null)
    .forEach(() => {
      myMock();
    });
});
