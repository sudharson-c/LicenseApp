

// Get the file list container
const fileListContainer = document.getElementById("fileList");

const removeFile = (file) => {
    //filesData.pop(file)
    //filesData = filesData.filter((fileItem)=> fileItem!=file);
    console.log(file)
}

filesData.forEach(file => {
    const fileEntry = document.createElement("div");
    fileEntry.classList.add("files");

    fileEntry.innerHTML = `
        <h3 class="fileTitle">${file.title}</h3>
        <img src="${file.imageSrc}" alt="fileImage" class="fileImage">
        <p class="fileText">${file.description}</p>
        <button class="saveFile">Save</button>
        <button class="viewFile">View</button>
        <button class="removeFile id="removeFile" onclick=removeFile(file)">Remove</button>
    `;

    // Append the file entry to the file list container
    fileListContainer.appendChild(fileEntry);
});

let removeF = document.getElementById("removefile");
removeF.onclick(removeFile());
