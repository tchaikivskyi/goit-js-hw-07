function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const contentPadding = parseFloat(padding);
  const contentBorder = parseFloat(border);

  return contentWidth + contentPadding * 2 + contentBorder * 2;
}

console.group('TASK N3');
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
console.groupEnd();
