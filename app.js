const checkbox = document.getElementById('switch');
checkbox.addEventListener('change',(e)=>{
    if (checkbox.checked) {
        document.querySelector('.container').style.backgroundColor = "hsl(0, 0%, 100%)";
        document.getElementById('header').style.backgroundColor = "hsl(225, 100%, 98%)";
        document.getElementById('border').style.borderBottomColor = "hsl(230, 17%, 14%)";
        const cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];
            element.style.backgroundColor =" hsl(227, 47%, 96%)";
        } 
         const greyBlue = document.getElementsByClassName('greyishBlue');
        for (let x = 0; x < greyBlue.length; x++) {
            const elements = greyBlue[x];
            elements.style.color ="hsl(228, 12%, 44%)";
        }
        const darkBlue = document.getElementsByClassName('darkBlue');
        for (let z = 0; z < darkBlue.length; z++) {
            const elements2 = darkBlue[z];
            elements2.style.color ="hsl(230, 17%, 14%)";
        }
    }else{
        document.querySelector('.container').style.backgroundColor = "hsl(230, 17%, 14%)";
        document.getElementById('header').style.backgroundColor = "hsl(232, 19%, 15%)";
        document.getElementById('border').style.borderBottomColor = "hsl(228, 12%, 44%)";
        const cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];
            element.style.backgroundColor ="hsl(228, 28%, 20%)";
        } 
         const greyBlue = document.getElementsByClassName('greyishBlue');
        for (let x = 0; x < greyBlue.length; x++) {
            const elements = greyBlue[x];
            elements.style.color ="hsl(228, 34%, 66%)";
        }
        const darkBlue = document.getElementsByClassName('darkBlue');
        for (let z = 0; z < darkBlue.length; z++) {
            const elements2 = darkBlue[z];
            elements2.style.color ="hsl(0, 0%, 100%)";
        }
    }
})