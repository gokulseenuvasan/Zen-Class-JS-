const myResume = {
    "personalInformation":{
       "name":"Gokul",
       "email":"gokulseenuvasan31@gmail.com",
       "phone":9585175934,
       "address":"76, V.O.C Street, Chinna Swamy Nagar, Orikkai Post, Kanchipuram 631 502."
    },
    "education":{
       "degree":"Bachelor of Computer Application",
       "institute":"SCSVMV University",
       "graduationYear":2020
    },
    "experience":{
       "position":"UI UX Designer",
       "company":"Encircle Innovations.",
       "start_date":"January 2024",
       "end_date":"Present",
       "responsibilities":[
          "Focused on Design Accessibility and Sustainability"
       ]
    },
    "skills":{
       "1":"JavaScript",
       "2":"React.js",
       "3":"HTML",
       "4":"CSS",
       "5":"WordPress",
       "6":"Figma",
       "7":"MongoDB",
       "8":"Design Thinking"
    },
    "languages":{
       "1":"English (Fluent)",
       "2":"Tamil (Good)",
       "3":"Telugu (Good)"
    },
    "certifications":{
       "1":"Certified MERN Stack Developer",
       "2":"UI UX Certification"
    },
    "projects 1":{
       "title":"BTree Systems",
       "description":"Bulid a full website using WordPress, HTML, CSS, PHP and SQL",
       "link":"https://btreesystems.com/"
    },
    "projects 2":{
       "title":"Old Silk Saree Buyers",
       "description":"At Kirubai Old Pattu Saree Buyers, we understand the sentimental and aesthetic value that each silk saree holds, even when it shows signs of wear and tear. ",
       "link":"https://kirubaisilkbuyers.in/"
    },
    "projects 3":{
       "title":"Assure Health Care",
       "description":"Assure Health Care is moving steadily towards the goal of creating awareness about preventive health care measures among the Indian population ",
       "link":"https://ahcare.co.in/"
    }
 };



 

// For Loop
const keys = Object.keys(myResume);
for (let i = 0; i < keys.length; i++) {                 // Iterate through the personal information using a for loop
  const key = keys[i];
  const value = myResume[key];
  if (typeof value === 'object') {                      // If the property is an object, iterate through its properties
    console.log(`${key.toUpperCase()}:`);
    const subKeys = Object.keys(value);
    for (let j = 0; j < subKeys.length; j++) {
      const subKey = subKeys[j];
      console.log(`- ${subKey}: ${value[subKey]}`);
    }
  } 
  else if (Array.isArray(value)) {                       // If the property is an array, iterate through its elements
    console.log(`${key.toUpperCase()}:`);
    for (let j = 0; j < value.length; j++) {
      console.log(`- ${value[j]}`);
    }
  } 
  else {
    console.log(`${key.toUpperCase()}: ${value}`);              // For simple properties, just print the key and value
  }
}





// For Each Loop 

Object.keys(myResume).forEach(key => {                  // Iterate through the personal information using forEach
  const value = myResume[key];
  if (typeof value === 'object')
  {
    console.log(`${key.toUpperCase()}:`);               // If the property is an object, Iterate through its properties
    Object.keys(value).forEach(subKey => {
      console.log(`- ${subKey}: ${value[subKey]}`);
    });
  }
  else if (Array.isArray(value)) {
    console.log(`${key.toUpperCase()}:`);               // If the property is an array, Iterate through its elements
    value.forEach(item => {
      console.log(`- ${item}`);
    });
  }
  else {
    console.log(`${key.toUpperCase()}: ${value}`);      // For simple properties, just print the key and value
  }
});





// For In Loop

for (const section in myResume) {                        // Iterate the JSON data over for loop
  console.log(`\n${section.toUpperCase()}:`);
  if (Array.isArray(myResume[section])) {
    for (let i = 0; i < myResume[section].length; i++) {  // Handle array data
      const item = myResume[section][i];
      console.log(`  ${i + 1}. ${item.position || item.degree}`);
      if (item.company) console.log(`Company: ${item.company}`);
      if (item.school) console.log(`School: ${item.school}`);
    }
  }
  else if (typeof myResume[section] === 'object') {
    for (const key in myResume[section]) {                 // Handle object data
      console.log(`  ${key}: ${myResume[section][key]}`);
    }
  }
  else {
    console.log(`  ${myResume[section]}`);                  // Handle other data types
  }
}





// For of Loop 

for (const [key, value] of Object.entries(myResume)) {      // Apply a for...of the loop to iterate through the personal data.
  if (typeof value === 'object') {
    console.log(`${key.toUpperCase()}:`);                   // Iterate over the property's properties if it's an object.
    for (const [subKey, subValue] of Object.entries(value)) {
      console.log(`- ${subKey}: ${subValue}`);
    }
  } 
  else if (Array.isArray(value)) {
    console.log(`${key.toUpperCase()}:`);                   // Iterate through the elements of the property if it is an array.
    for (const item of value) {
      console.log(`- ${item}`);
    }
  } 
  else {
    console.log(`${key.toUpperCase()}: ${value}`);           // Simply print the key and value for basic properties.
  }
}