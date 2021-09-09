export default function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}
