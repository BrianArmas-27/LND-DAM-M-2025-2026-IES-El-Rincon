//Variables globales
const itemInput = document.getElementById('newItemInput');
const list = document.getElementById('itemsList');   
const addBtn = document.getElementById('addItemBtn');
//Funciones
//Añade el item generado por el usuario y los botones
function addItem()
{
    const item=itemInput.value;
    if(item!='')
    {
        //Añadiendo el elemento
        const listItem = document.createElement('li');
        const spanMan = document.createElement('span');
        spanMan.textContent=item;
        listItem.appendChild(spanMan);
        list.appendChild(listItem);
        //Añadiendo botones de completado y borrar
        createButtons(listItem,spanMan);
    }
    itemInput.value='';
    itemInput.focus();
}
//Crea los botones para cada item
function createButtons(father,child)
{
    //Inicializando botones
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn');
    completeBtn.textContent = '✔';
    father.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = '⌫';
    father.appendChild(deleteBtn);
    //Dándoles un listener
    completeBtn.addEventListener('click', () => completedItem(child));
    deleteBtn.addEventListener('click', () => deleteItem(father));
}
//El item se tacha
function completedItem(item)
{
    item.classList.add('completed');
}
//El item desaparece
function deleteItem(item)
{
    list.removeChild(item);
}
//Añadiendo el funcionamiento
addBtn.addEventListener('click', addItem);