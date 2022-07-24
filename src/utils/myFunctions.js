export const getFilteredDocument = (documents, selectedDocument) => {
  return documents.filter((document) => document.title === selectedDocument);
};

export const sortByName = (documents) => {
  let sorted = documents.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return sorted;
};
