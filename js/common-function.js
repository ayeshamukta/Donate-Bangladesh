// function buttonsColor(id)
// {
//     document.getElementById(id).classList.remove('bg-[#B4F461]')
//     document.getElementById(id).classList.add('bg-[#B4F461]')

// }

function getInput(id)
{
    const val = document.getElementById(id).value; 
    return val;
}
function getTextInput(id)
{
    const val = document.getElementById(id).innerText; 
    return val;
}

function includeHistory(amount,str)
{
    const time = new Date();
    const container = document.getElementById('transaction');
    const newCard = document.createElement('div');
    newCard.innerHTML = `
                        <div class="border rounded-lg mb-3">
                            <p class="font-bold px-4 pt-3 text-lg">${amount} Taka is Donated ${str},Bangladesh</p>
                            <p class="px-4 py-3">Date: ${time}</p>

                        </div>`;
    container.appendChild(newCard);

}