
var text = document.querySelector('#textcolor');

text.onclick = function()
 {
    if (text.style.color === 'blue') 
    {
        text.style.color = 'black';
    } else {
        text.style.color = 'blue';
    }
}

function showText() 
{
    var description = document.querySelector('#description');
    var showButton = document.querySelector('#showButton');
    var hideButton = document.querySelector('#hideButton');
    description.innerText = "상자를 열어서 새로운 카드[15]를 획득하고 이 중 8장의 카드로 자신의 덱을 구성해 상대방과 턴 개념이 없는 '실시간' 카드 전투를 한다. 게임에 영향을 끼치는 운 요소가 카드와 드로 순서(선패) 정도를 제외하면 별로 없으며, 빠른 두뇌 회전과 손놀림이 요구된다. 사실 카드 게임보다는 RTS에 가깝다.";
    showButton.style.display = 'none';
    hideButton.style.display = 'inline';
}

function hideText() 
{
    var description = document.querySelector('#description');
    var showButton = document.querySelector('#showButton');
    var hideButton = document.querySelector('#hideButton');
    description.innerText = "";
    showButton.style.display = 'inline';
    hideButton.style.display = 'none';
}
