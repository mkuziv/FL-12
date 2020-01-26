const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];


const rootNode = document.getElementById('root');

function createFolderList(item, parentElement) {
  if (item.folder || item.title) {
    const parentChildItem = document.createElement('li');


    const titleElement = document.createElement('span');
    titleElement.appendChild(createIcon(!item.folder));
    titleElement.appendChild(document.createTextNode(item.title));
    parentChildItem.appendChild(titleElement);

    if (item.folder) {
      parentChildItem.className = 'folder-list closed';

      const folderList = document.createElement('ul');
      const folderListItem = document.createElement('li');
      folderList.appendChild(folderListItem);

      parentChildItem.addEventListener(
        'click',
        (event) => {
          if (event.target.parentElement === event.currentTarget) {
            const iconElement = event.target.children[0];
            if (event.currentTarget.classList.toggle('closed')) {
              iconElement.innerHTML = 'folder';
            } else {
              iconElement.innerHTML = 'folder_open';
            }

          }
        },
        false
      );

      if (item.children) {
        item.children.forEach((item) => {
          createFolderList(item, folderListItem);
        });
      } else {
        folderListItem.appendChild(document.createTextNode('Folder is Empty'));
      }

      parentChildItem.appendChild(folderList);
    }

    parentElement.appendChild(parentChildItem);
  }
}

let element = document.createElement('ul');
rootNode.appendChild(element);

structure.forEach(item => {
  createFolderList(item, element);
});

function createIcon(isFile) {
  const icon = document.createElement('i');
  icon.className = 'material-icons';

  if (isFile) {
    icon.classList.add('file-icon');
    icon.textContent = 'insert_drive_file';
  } else {
    icon.classList.add('icon');
    icon.textContent = 'folder';
  }

  return icon;
}