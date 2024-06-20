export const getBackgoundColor = () => {
  // const footer = document.querySelector('footer');
  const footer = document.body;
  const styles = getComputedStyle(footer)
  return styles.backgroundColor;
}