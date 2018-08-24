import Highlighter from 'highlighter'

/* Comment */
class Moonlight extends Highlighter {
  constructor() {
    this.data = {
      string: 'hello',
      boolean: true && false,
      nil: undefined || null,
      regex: /^[12345](hello).+$/,
      number: -123456789,
      magicConstant: ALL_CAPS,
      jsx: (
        <div className="native-html-element">
          <Component prop={true} />
        </div>
      ),
      function: (...numbers) =>
        numbers
          .map(n => n + 2)
          .filter(n => n <= numbers.length - 2)
          .reduce((a, b) => a + b, 0)
    }
  }
}

export default Moonlight
