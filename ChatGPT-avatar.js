
// ==UserScript==
// @name         ChatGPT avatar
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Updates the ChatGPT avatar
// @author       u/enoch2022
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @license      MIT
// ==/UserScript==
const avatarSelector = "div[class='relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center'], img.rounded-sm1, img.rounded-sm";

// def image select/label
const imageSelect = document.createElement('select');
const imageLabel = document.createElement('label');
imageLabel.innerText = 'myAvatar:   ';
imageLabel.appendChild(imageSelect);
imageLabel.style.fontWeight = 'bold';

const imageSelect2 = document.createElement('select');
const imageLabel2 = document.createElement('label');
imageLabel2.innerText = 'botAvatar: ';
imageLabel2.appendChild(imageSelect2);
imageLabel2.style.fontWeight = 'bold';



function applySelectStyles(selectElement) {
selectElement.style.backgroundColor = '#ffffff';
selectElement.style.border = '1px solid #e0e0e0';
selectElement.style.borderRadius = '4px';
selectElement.style.padding = '4px 40px';
selectElement.style.color = '#333';
selectElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
selectElement.style.fontSize = '14px';
}
applySelectStyles(imageSelect);
applySelectStyles(imageSelect2);
function applyLabelStyles(labelElement) {
labelElement.style.color = '#333';
labelElement.style.fontWeight = 'bold';
labelElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
labelElement.style.fontSize = '14px';
}
applyLabelStyles(imageLabel);
applyLabelStyles(imageLabel2);

// def image select/label function
function setImagePath1() {
updateAvatar(avatarSelector, imageSelect.value, imageSelect2.value);
updateImageStyles();
}
function setImagePath2() {
updateAvatar(avatarSelector, imageSelect.value, imageSelect2.value);
updateImageStyles();
}
imageSelect.onchange = () => {
console.log('imageSelect onchange triggered');
setImagePath1();
};
imageSelect2.onchange = () => {
console.log('imageSelect2 onchange triggered');
setImagePath2();
};


// def container
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '1rem';
container.style.right = '1rem';
container.style.backgroundColor = 'white';
container.style.border = '1px solid black';
container.style.padding = '1rem';
container.style.top = '50%';
container.style.transform = 'translateY(-50%)';
container.style.width = '200px';
container.style.height = '200px';
container.style.resize = 'both';
container.style.overflow = 'auto';
container.style.cursor = 'move';
container.style.backgroundColor = '#F7F7F7';
container.style.border = '1px solid #b0b0b0';
container.style.padding = '1rem';
container.style.borderRadius = '5px';
container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
container.style.transition = 'box-shadow 0.3s, transform 0.3s';
container.onmouseover = function () {
container.style.boxShadow = '0 12px 14px rgba(0, 0, 0, 0.15)';
container.style.transform = 'translateY(-4px)';
};
container.onmouseout = function () {
container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
container.style.transform = 'translateY(0)';
};
container.appendChild(imageLabel);
container.appendChild(imageLabel2);
document.body.appendChild(container);


// def lockButton
const lockButton = document.createElement('button');
lockButton.onclick = toggleLock;
container.appendChild(lockButton);
lockButton.innerText = '';
lockButton.style.backgroundColor = '#ff5f56';
lockButton.style.borderRadius = '50%';
lockButton.style.width = '20px';
lockButton.style.height = '20px';
lockButton.style.padding = '0';
lockButton.style.marginRight = '6px';
lockButton.style.boxShadow = 'none';
lockButton.style.border = 'none';
lockButton.style.cursor = 'pointer';
lockButton.style.display = 'flex';
lockButton.style.justifyContent = 'center';
lockButton.style.alignItems = 'center';
const pinIcon = document.createElement('span');
pinIcon.innerHTML = '📌';
pinIcon.style.fontSize = '10px';
lockButton.appendChild(pinIcon);

function toggleLock() {
isLocked = !isLocked;
lockButton.innerText = isLocked ? '📌' : 'Lock';
}

// def hideButton
const hideButton = document.createElement('button');
hideButton.innerText = 'Hide';
hideButton.onclick = hideContainer;
container.appendChild(hideButton);
hideButton.innerText = '';
hideButton.style.backgroundColor = '#ffbd2e';
hideButton.style.borderRadius = '50%';
hideButton.style.width = '20px';
hideButton.style.height = '20px';
hideButton.style.padding = '0';
hideButton.style.marginRight = '2px';
hideButton.style.boxShadow = 'none';
hideButton.style.border = 'none';
hideButton.style.cursor = 'pointer';
hideButton.style.display = 'flex';
hideButton.style.justifyContent = 'center';
hideButton.style.alignItems = 'center';
const minimizeIcon = document.createElement('span');
minimizeIcon.innerHTML = '➖';
minimizeIcon.style.fontSize = '10px';
hideButton.appendChild(minimizeIcon);

function hideContainer() {
container.style.display = 'none';
avatarButton.style.display = 'block';
}
function showContainer() {
container.style.display = 'block';
avatarButton.style.display = 'none';
}

//def localFileButton
const localFileButton = document.createElement('button');
localFileButton.style.backgroundColor = '#2196F3';
localFileButton.style.borderRadius = '50%';
localFileButton.style.width = '20px';
localFileButton.style.height = '20px';
localFileButton.style.padding = '0';
localFileButton.style.margin = '0 3px'; // Ìí¼Ó margin
localFileButton.style.boxShadow = 'none';
localFileButton.style.border = 'none';
localFileButton.style.cursor = 'pointer';
localFileButton.style.display = 'flex';
localFileButton.style.justifyContent = 'center';
localFileButton.style.alignItems = 'center';
const folderIcon = document.createElement('span');
folderIcon.innerHTML = '📁';
folderIcon.style.fontSize = '14px';
localFileButton.appendChild(folderIcon);


//def avatarButton
const avatarButton = document.createElement('button');
avatarButton.innerText = 'Avatar';
avatarButton.style.position = 'fixed';
avatarButton.style.borderRadius = '50%';
avatarButton.style.display = 'none';
avatarButton.onclick = showContainer;
avatarButton.style.bottom = '1rem';
avatarButton.style.right = '1rem';
avatarButton.style.backgroundColor = 'white';
avatarButton.style.border = '1px solid black';
avatarButton.style.padding = '0.5rem 1rem';
document.body.appendChild(avatarButton);

//def titleBar
const titleBar = document.createElement('div');
titleBar.style.display = 'flex';
titleBar.style.justifyContent = 'space-between';
titleBar.style.alignItems = 'center';
titleBar.style.marginBottom = '1rem';
titleBar.appendChild(lockButton);
titleBar.appendChild(hideButton);
titleBar.appendChild(localFileButton);
container.insertBefore(titleBar, container.firstChild);

//def globalProgressBar

const globalProgressBar = createProgressBar();

function createProgressBar() {
const progressBar = document.createElement('progress');
progressBar.max = 100;
progressBar.value = 0;
progressBar.style.width = '100%';
progressBar.style.marginTop = '10px';
return progressBar;
}


//def some mouse action

let isMouseDown = false;
let isLocked = false;
let offsetX, offsetY;
container.onmousedown = function (event) {
if (!isLocked) {
isMouseDown = true;
offsetX = event.clientX - container.getBoundingClientRect().left;
offsetY = event.clientY - container.getBoundingClientRect().top;
}
};
document.onmousemove = function (event) {
if (isMouseDown && !isLocked) {
container.style.left = `${event.clientX - offsetX}px`;
container.style.right = 'initial';
container.style.top = `${event.clientY - offsetY}px`;
container.style.bottom = 'initial';
}
};
document.onmouseup = function () {
isMouseDown = false;
};

//def anmation
function addClickAnimation(button) {
button.onmousedown = function () {
button.style.transform = 'scale(0.95)';
button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
};
button.onmouseup = function () {
button.style.transform = 'scale(1)';
button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
};
}

addClickAnimation(localFileButton);
addClickAnimation(lockButton);
addClickAnimation(hideButton);
addClickAnimation(avatarButton);

//def some of the actions of the buttons

function styleButton(button) {
button.style.backgroundColor = '#10A37F';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.padding = '5px 10px';
button.style.margin = '5px';
button.style.cursor = 'pointer';
button.style.fontSize = '0.9rem';
}
styleButton(avatarButton);

//def uploadimage function
let uploadedImages = [];

function processFiles(files, onFileProcessed, onComplete) {
  let totalBytes = 0;
  let loadedBytes = 0;
  const validFiles = Array.from(files).filter(isValidImage);

  // 计算总大小
  for (const file of validFiles) {
    totalBytes += file.size;
  }

  container.appendChild(globalProgressBar); // 假设这是一个已存在的DOM元素

  // 处理每个文件
  validFiles.forEach(file => {
    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        loadedBytes += event.loaded;
        const percentage = (loadedBytes / totalBytes) * 100;
        globalProgressBar.value = percentage;
        if (loadedBytes === totalBytes) {
          container.removeChild(globalProgressBar);
          if (typeof onComplete === 'function') {
            onComplete();
          }
        }
      }
    };

    reader.onload = (e) => {
      onFileProcessed(file, reader.result);
    };

    reader.onerror = () => {
      alert(`Error reading ${file.name}`);
    };

    reader.readAsDataURL(file);
  });
}

function handleFilesSelection(event) {
  processFiles(event.target.files, (file, dataURL) => {
    const option = new Option(file.name, file.name);
    imageSelect.appendChild(option);
    imageSelect2.appendChild(option.cloneNode(true));
  });
}

localFileButton.addEventListener('click', () => {
  const inputElement = document.createElement('input');
  inputElement.type = 'file';
  inputElement.webkitdirectory = true;
  inputElement.style.display = 'none';

  inputElement.addEventListener('change', (event) => {
    processFiles(event.target.files, (file, dataURL) => {
      uploadedImages.push({
        name: file.name,
        data: dataURL
      });
    }, populateSelect);
  });

  document.body.appendChild(inputElement);
  inputElement.click();
  document.body.removeChild(inputElement);
});

function isValidImage(file) {
const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
const fileExtension = file.name.split('.').pop().toLowerCase();
return validImageExtensions.includes(fileExtension);
}





//def updateAvatar function

let imageList = [];

function updateAvatar(currentSelector, url, url2) {
const elements = document.querySelectorAll(currentSelector);
for (let i = 0; i < elements.length; i++) {
const element = elements[i];
if (element.tagName.toLowerCase() === 'img' &&
element.closest('.grow')) {
continue;
}
if (element.dataset.replaced) {
continue;
}
const currentUrl = element.className === 'rounded-sm' ? url : url2;
//   console.log(url,url2,currentUrl, element.className)
const result = currentUrl === url && element.className === 'rounded-sm1';
//console.log('½á¹ûiOS',result);  // true »ò false
if (element.tagName.toLowerCase() === 'div') {
// Remove the SVG element from the div
element.removeChild(element.firstChild);
console.log("trigger");
// Create a new img element
const img = document.createElement('img');
img.src = currentUrl;
img.style.height = '6rem';
img.style.width = '6rem';
img.style.objectFit = 'cover';
img.style.minWidth = '6rem';
img.style.minHeight = '6rem';
img.className = 'rounded-sm1';
// Set the position property to relative
img.style.position = 'relative';
// Use left and bottom properties to adjust the position
img.style.left = '-30px';
img.style.bottom = '-17px';
// Clear background-image property from div
element.style.backgroundImage = '';
// Add the flex-shrink-0 class to prevent the div from shrinking in a flex layout
element.classList.add('flex-shrink-0');
console.log(img)
// Add the new img element to the div
element.appendChild(img);
}
else if (element.className === 'rounded-sm1') {
element.src = currentUrl;
element.srcset = `${currentUrl} 1x, ${currentUrl} 2x`;
element.alt = "New Avatar";
}
else{
element.src = currentUrl;
element.srcset = `${currentUrl} 1x, ${currentUrl} 2x`;
element.alt = "New Avatar";
element.style.width = '100px';
element.style.transform = 'translateX(-60px)';
element.dataset.lastUrl = currentUrl;
}
}
}

function populateSelect() {
imageSelect.innerHTML = '';
imageSelect2.innerHTML = '';
for (const image of uploadedImages) {
const option = document.createElement('option');
option.innerText = image.name;
option.value = image.data;
imageSelect.appendChild(option);
const option2 = document.createElement('option');
option2.innerText = image.name;
option2.value = image.data;
imageSelect2.appendChild(option2);
}
if (uploadedImages.length > 0) {
setImagePath1();
setImagePath2();
}
}

function updateImageStyles() {
const spanElements = document.getElementsByTagName('span');
for (let i = 0; i < spanElements.length; i++) {
const spanElement = spanElements[i];
const styleAttribute = spanElement.getAttribute('style');
if (
styleAttribute &&
styleAttribute.includes('width: initial;') &&
styleAttribute.includes('height: initial;')
) {
spanElement.style.width = '6rem';
spanElement.style.height = '6rem';
}
}
}



//if new item appears in the webpage

(function() {
    'use strict';

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                const addedNodes = Array.from(mutation.addedNodes);
                const hasImage = addedNodes.some(node => {
                    return node.nodeType === 1 && (node.tagName === 'IMG' || node.querySelector('img'));
                });
                if (hasImage) {
                    if (imageSelect.value !== '' && imageSelect2.value !== '') {
    updateAvatar(avatarSelector, imageSelect.value, imageSelect2.value);
                    updateImageStyles();

}                }
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
