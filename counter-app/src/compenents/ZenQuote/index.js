import React from "react";

const quote = [
  {
    index: 0,
    q: "In youth we run into difficulties. In old age difficulties run into us. ",
    a: "Beverly Sills",
    c: "72",
    h: "<blockquote>&ldquo;In youth we run into difficulties. In old age difficulties run into us. &rdquo; &mdash; <footer>Beverly Sills</footer></blockquote>",
  },

  {
    index: 1,
    q: "The world makes way for the man who knows where he is going.",
    a: "Ralph Waldo Emerson",
    c: "60",
    h: "<blockquote>&ldquo;The world makes way for the man who knows where he is going.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>",
  },

  {
    index: 2,
    q: "Never regret your past. Rather, embrace it as the teacher that it is.",
    a: "Robin Sharma",
    c: "69",
    h: "<blockquote>&ldquo;Never regret your past. Rather, embrace it as the teacher that it is.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>",
  },

  {
    index: 3,
    q: "Be still when you have nothing to say; when genuine passion moves you, say what you've got to say, and say it hot.",
    a: "D. H. Lawrence",
    c: "114",
    h: "<blockquote>&ldquo;Be still when you have nothing to say; when genuine passion moves you, say what you've got to say, and say it hot.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>",
  },

  {
    index: 4,
    q: "We suffer more often in imagination than in reality.  ",
    a: "Seneca",
    c: "54",
    h: "<blockquote>&ldquo;We suffer more often in imagination than in reality.  &rdquo; &mdash; <footer>Seneca</footer></blockquote>",
  },

  {
    index: 5,
    q: "The wise accomplish all that they want without arousing the envy or scorn of others.",
    a: "Ming-Dao Deng",
    c: "84",
    h: "<blockquote>&ldquo;The wise accomplish all that they want without arousing the envy or scorn of others.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>",
  },

  {
    index: 6,
    q: "Success in any endeavor depends on the degree to which it is an expression of your true self. ",
    a: "Ralph Marston",
    c: "94",
    h: "<blockquote>&ldquo;Success in any endeavor depends on the degree to which it is an expression of your true self. &rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>",
  },

  {
    index: 7,
    q: "Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.",
    a: "Marcus Aurelius",
    c: "97",
    h: "<blockquote>&ldquo;Think of yourself as dead. you have lived your life. Now, take what's left, and live it properly.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>",
  },

  {
    index: 8,
    q: "There is no one giant step that does it. It's a lot of little steps.",
    a: "Peter A. Cohen",
    c: "68",
    h: "<blockquote>&ldquo;There is no one giant step that does it. It's a lot of little steps.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>",
  },

  {
    index: 9,
    q: "Life doesn't get easier or more forgiving, we get stronger and more resilient.",
    a: "Steve Maraboli",
    c: "78",
    h: "<blockquote>&ldquo;Life doesn't get easier or more forgiving, we get stronger and more resilient.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>",
  },
];

function ZenQuote() {
  const randomNumber = Math.floor(Math.random() * 10);
  function newRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  return (
    <div>
      <p>{quote[randomNumber].q}</p>
      <p>{quote[randomNumber].a}</p>
      <button onClick={newRandomNumber}>New Quote</button>
    </div>
  );
}

export default ZenQuote;
