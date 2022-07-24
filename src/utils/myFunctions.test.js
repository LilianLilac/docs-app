import { getFilteredDocument, sortByName } from "./myFunctions";

describe("tests filter function", () => {
  test("gets empty array when passed an empty array", () => {
    let documents = [];
    let selectedDocument = "Employee Handbook";
    expect(getFilteredDocument(documents, selectedDocument)).toEqual([]);
  });

  test("gets empty array when passed an array of documents that does not contain a filtered document", () => {
    let documents = [
      {
        type: "doc",
        title: "Expenses claim form",
        date: new Date(2017, 5, 2),
      },
      {
        type: "doc",
        title: "Fuel allowances",
        date: new Date(2017, 5, 3),
      },
    ];
    let selectedDocument = "Misc";
    expect(getFilteredDocument(documents, selectedDocument)).toEqual([]);
  });

  test("gets an array with selected title file when filter by selected document title", () => {
    let documents = [
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
      {
        type: "pdf",
        title: "Public Holiday policy",
        date: new Date(2016, 12, 6),
      },
    ];
    let selectedDocument = "Employee Handbook";
    expect(getFilteredDocument(documents, selectedDocument)).toEqual([
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
    ]);
  });
});

describe("tests sort by name function", () => {
  test("returns empty array when passed an empty array", () => {
    let documents = [];
    expect(sortByName(documents)).toEqual([]);
  });

  test("sorts documents by title alphabetically", () => {
    let documents = [
      {
        type: "pdf",
        title: "Public Holiday policy",
        date: new Date(2016, 12, 6),
      },
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
    ];
    expect(sortByName(documents)).toEqual([
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
      {
        type: "pdf",
        title: "Public Holiday policy",
        date: new Date(2016, 12, 6),
      },
    ]);
  });
  test("sorts documents by title alphabetically when passed an array with nested arrays", () => {
    let documents = [
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
      {
        type: "pdf",
        title: "Public Holiday policy",
        date: new Date(2016, 12, 6),
      },
      {
        type: "folder",
        title: "Expenses",
        files: [
          {
            type: "doc",
            title: "Expenses claim form",
            date: new Date(2017, 5, 2),
          },
          {
            type: "doc",
            title: "Fuel allowances",
            date: new Date(2017, 5, 3),
          },
        ],
      },
      {
        type: "csv",
        title: "Cost centres",
        date: new Date(2016, 8, 12),
      },
    ];
    expect(sortByName(documents)).toEqual([
      {
        type: "csv",
        title: "Cost centres",
        date: new Date(2016, 8, 12),
      },
      {
        type: "pdf",
        title: "Employee Handbook",
        date: new Date(2017, 1, 6),
      },
      {
        type: "folder",
        title: "Expenses",
        files: [
          {
            type: "doc",
            title: "Expenses claim form",
            date: new Date(2017, 5, 2),
          },
          {
            type: "doc",
            title: "Fuel allowances",
            date: new Date(2017, 5, 3),
          },
        ],
      },
      {
        type: "pdf",
        title: "Public Holiday policy",
        date: new Date(2016, 12, 6),
      },
    ]);
  });
});
