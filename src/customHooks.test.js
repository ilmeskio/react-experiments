import { useToggle } from "./customHooks";

it("should return a tuple", () => {
  const returned = useToggle();
  expect(Array.isArray(returned)).toBe(true);
  expect(returned.length).toBe(2);
});

it("should return a tuple with a variable (equal to the default passed) and a function", () => {
  const expected = 5;
  const [returned, wouldUpdateState] = useToggle({ value: expected });

  expect(returned).toBe(expected);
});

it("by default should be false", () => {
  const [returned, stilldontknow] = useToggle();

  expect(returned).toBe(false);
});
