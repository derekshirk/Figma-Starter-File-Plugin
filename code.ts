// Figma New File Setup
// Plugin Author: Derek Shirk

// Cover component key
const coverKey = "cc075773903303bbde3c81b68adaf4d69f83aa7a";

// Page names
let FigmaPages = [
  " ",
  "Build Phase 🔴",
  "      ↳ 📐 VQA",
  "      ↳ 📦 Screens",
  "      ↳ 🕹 Prototype Mobile",
  "      ↳ 🕹 Prototype Desktop",
  "      ↳ 🧭 User Flows",
  " ",
  "–––––––––––––––––––––––––––––––",
  " ",
  "A New Feature 🟢",
  "     ↳ 🏆 Final",
  "     ↳ 🍿 Stakeholder reviews",
  "     ↳ 🔎 Team reviews",
  "     ↳ 🕹 Prototype",
  "     ↳ 🖍 Design",
  "     ↳ ✏️️ Content",
  "     ↳ 🔮 Research",
  " ",
  "Local File Assets",
  "     ↳ ❖ Components",
  " ",
  "–––––––––––––––––––––––––––––––",
  " ",
  "     ↳ ☠️ Archive"
];

let run = async () => {
  // Create cover page
  let coverPage = figma.currentPage;
  coverPage.name = "Cover";

  // Add Driveway XD Thumbnail library component to cover page
  // The component key is stored as a variable earlier in the SRC
  // Information on how to get the key: 
  let libraryCover = await figma.importComponentByKeyAsync(coverKey)

  // Create cover frame
  let coverFrame = figma.createFrame()
  
  // Name cover frame
  coverFrame.name = "Cover";
  
  // Add cover frame to cover page
  coverPage.appendChild(coverFrame);
  
  // Add library cover to cover frame
  coverFrame.appendChild(libraryCover.createInstance());
  
  // Resize cover frame to match library cover
  coverFrame.resize(libraryCover.width, libraryCover.height);

  // zoom into the cover, or else it'll be larger than the user's viewport
  const nodes = [];
  nodes.push(coverFrame);
  figma.viewport.scrollAndZoomIntoView(nodes);

  // Update year
  // nothing here yet...
  // need to find the layer name
  // need to create a variable for current year
  // need to update layer with a string equal to current year. 

  // Update Project name if file name is != 'untitled'
  // the thumbnail layer name to edit is: Project Name
  // const projectName = figma.currentPage.findOne(n => n.name === "Project Name");

  // Set cover frame as file thumbnail
  figma.setFileThumbnailNodeAsync(coverFrame);

  // Create other pager
  for (let page of FigmaPages) {
    let newPage = figma.createPage();
    newPage.name = page;
  }

  // Done!
  figma.closePlugin("New file Setup Complete 🎉");
}

run();