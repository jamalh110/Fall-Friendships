module.exports = {
    json = {
        title: "Friendship Survey",
        completedHtml: "<div style = \"text-align:center\">Submitting...<br>Do not leave this page<br><br><div>",
        pages: [
          {
            name: "page1",
            elements: [
              { type: "text", name: "question2", title: "First Name" },
              { type: "text", name: "question3", title: "Last Name" },
              {
                type: "radiogroup",
                name: "question1",
                title: "Class",
                choices: [
                  { value: "item1", text: "2023" },
                  { value: "item2", text: "2022" },
                  { value: "item3", text: "2021" },
                  { value: "item4", text: "2020" },
                  { value: "item5", text: "Grad" },
                  { value: "item6", text: "Staff/Faculty" }
                ]
              },
              {
                type: "radiogroup",
                name: "question4",
                title: "Gender",
                hasOther: true,
                choices: [
                  { value: "item1", text: "Male" },
                  { value: "item2", text: "Female" }
                ]
              },
              {
                type: "dropdown",
                name: "question5",
                title: "Major",
                hasOther: true,
                choices: [
                  { value: "item1", text: "STEM" },
                  { value: "item2", text: "Humanities" },
                  { value: "item3", text: "Archies" },
                  { value: "item4", text: "Dysons" },
                  { value: "item5", text: "Hotelies" },
                  { value: "item6", text: "NA" }
                ]
              },
              {
                type: "radiogroup",
                name: "question6",
                choices: ["item1", "item2", "item3", "item4"]
              },
              {
                type: "radiogroup",
                name: "question7",
                choices: ["item1", "item2", "item3", "item4"]
              },
              {
                type: "radiogroup",
                name: "question8",
                choices: ["item1", "item2", "item3", "item4"]
              },
              {
                type: "radiogroup",
                name: "question9",
                choices: ["item1", "item2", "item3", "item4"]
              },
              {
                type: "radiogroup",
                name: "question10",
                choices: ["item1", "item2", "item3", "item4"]
              }
            ]
          }
        ]
      }
}