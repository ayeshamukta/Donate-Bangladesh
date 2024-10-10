const modalBox = document.getElementById('my_modal_1');







document.getElementById('noa-button').addEventListener('click',function(event)
{
    event.preventDefault();
    const noaAmount = parseFloat(getInput('noakhali-amount'));
    const availableBalance = parseFloat(getTextInput('noakhali-current-amount'));
    const totalBal = parseFloat(getTextInput('avl-bal'))
    
    if((totalBal < noaAmount) || (noaAmount<=0))
    {
        alert('Insufficient Amount');
        return;
        
    }
    else
    {
        
        const newBalNoa = availableBalance + noaAmount;
        document.getElementById('noakhali-current-amount').innerText = newBalNoa;
        const totBal1 = totalBal - noaAmount;
        document.getElementById('avl-bal').innerText = totBal1;

        modalBox.showModal();
        includeHistory(noaAmount,'famine-2024 at Noakhali');
        
    }
   
})

document.getElementById('feni-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const feniAmount = parseFloat(getInput('feni-amount'));
    const feniAvailBalance = parseFloat(getTextInput('feni-cur-bal'));
    
    const totalBal = parseFloat(getTextInput('avl-bal'));
    
    if(( feniAmount> totalBal) || (feniAmount<=0))
    {
        alert('Insufficient Amount');
        return;
    }
    else
    {
        
        const newBalFeni = feniAvailBalance + feniAmount;
        document.getElementById('feni-cur-bal').innerText = newBalFeni;

        const totBal = totalBal - feniAmount;
        document.getElementById('avl-bal').innerText = totBal;
        modalBox.showModal();

        includeHistory(feniAmount,'Flood Relief in Feni');

    }
   
})


document.getElementById('quota-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const quotaAmount = parseFloat(getInput('quota-amount'));

    const quotaAvailBalance = parseFloat(getTextInput('quota-cur-bal'));
    const totalBal = parseFloat(getTextInput('avl-bal'));
    
    
    
    if((quotaAmount> totalBal) || (quotaAmount<=0) )
    {
        alert('Insufficient Amount');
        return;
    }
    else
    {
        
        const newBalQuota = quotaAvailBalance + quotaAmount;
        document.getElementById('quota-cur-bal').innerText = newBalQuota;

        const totBal = totalBal - quotaAmount;
        document.getElementById('avl-bal').innerText = totBal;
        modalBox.showModal();
        
        includeHistory(quotaAmount,'Aid for Injured in the Quota Movement');
    }
   
})
document.getElementById('blg-btn').addEventListener('click',function()
{
    window.location.href = './blog.html';
    
});