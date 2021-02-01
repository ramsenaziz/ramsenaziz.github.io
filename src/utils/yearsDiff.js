export default function yearsDiff(from) {
  let date1 = new Date(from);
  let date2 = new Date();
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}
