module.exports = grammar({
  name: "markdown",

  rules: {
    root: $ => repeat($._root),
    _root: $ => choice($.link, $.text),
    link: $ =>
      seq("[", $.text, "]", "(", $.text, optional(seq('"', $.text, '"')), ")"),
    text: $ => /[^\[\(\]\)"]+/
  }
});
