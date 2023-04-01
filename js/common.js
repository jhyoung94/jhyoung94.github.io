const isEmpty = (val) => {
  return (
    typeof val == "undefined" ||
    val == null ||
    val == "" ||
    val.replace(/ /gi, "") == ""
  );
};