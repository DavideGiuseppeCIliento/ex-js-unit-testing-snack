function getInitials(name) {
  const nameSurname = name.split(" ");
  console.log(nameSurname);
  const initial = `${nameSurname[0][0]}${nameSurname[1][0]}`;
  return initial.toUpperCase();
}

module.exports = { getInitials };
