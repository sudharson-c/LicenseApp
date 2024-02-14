const fileListContainer = document.getElementById("fileList");

const removeFile = (title) => {
    console.log("Removing file:", title);
}

const viewFile = (title) => {
    window.open("http://localhost:3000/uploads/" + title, "_blank");
}

filesData.forEach(file => {
    const fileEntry = document.createElement("div");
    fileEntry.classList.add("files");

    fileEntry.innerHTML = `
        <h3 class="fileTitle">${file.title}</h3>
        <img src="${file.imageSrc}" alt="fileImage" class="fileImage">
        <p class="fileText">${file.description}</p>
        <button class="saveFile">Save</button>
        <button class="viewFile" onclick=<%viewFile(${file})%>>View</button>
        <button class="removeFile" onclick="removeFile('${file.title}')">Remove</button>
    `;
    fileListContainer.appendChild(fileEntry);
});

let removeF = document.getElementById("removefile");
removeF.onclick = () => {
    alert('This feature is not yet available');
};
