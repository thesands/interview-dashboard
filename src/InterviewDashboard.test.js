import { render, screen } from '@testing-library/react';
import InterviewDashboard from './InterviewDashboard';

test('renders learn react link', () => {
  render(<InterviewDashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe("change", () => {
//   it("should publish the selected date", () => {
//     const fn = jest.fn();
//     const { getByTestId } = render(
//       <DateSlider earth_date="2017-5-13" onDateChanged={fn} />
//     );

//     const input = getByTestId("date-slider");
//     fireEvent.change(input, { target: { value: "3877" } });

//     expect(fn.mock.calls).toEqual([[solToDate(3877)]]);
//   });
// });

it('should do something async promise', () => {
  return Promise.resolve(1 + 1).then((v) => expect(2).toBe(v));
});

it('should do something async await', async () => {
  await Promise.resolve(1 + 1).then((v) => expect(2).toBe(v));
});

it('should work for async functions', async () => {
  await expect(Promise.resolve(1 + 1)).resolves.toBe(2);
});

it('should mock the calls', () => {
  const f = jest.fn();

  f(1, 2, 3);
  f('a');

  expect(f.mock.calls).toEqual([[1, 2, 3], ['a']]);
});

it('should mock the calls of adding together', () => {
  const f = jest.fn((a, b) => a + b);

  expect(f(4, 8)).toBe(12);
  expect(f.mock.calls).toEqual([[4, 8]]);
  expect(f.mock.results).toEqual([
    {
      type: 'return',
      value: 12,
    },
  ]);
});

it('should mock with fixed results', () => {
  const f = jest.fn();
  f.mockReturnValueOnce(12).mockReturnValue(0);
  expect(f()).toBe(12);
  expect(f()).toBe(0);
  expect(f()).toBe(0);
});
