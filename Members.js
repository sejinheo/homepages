document.querySelectorAll('.left_percent').forEach(element =>
    {
   const leftValue = element.getAttribute('data-left');
   element.style.left = leftValue; 
    });

    document.querySelectorAll('.position_top').forEach(element =>
        {
       const topValue = element.getAttribute('data-top');
       element.style.top = topValue; 
        });



        document.querySelectorAll('.showButton').forEach(button =>
             {
            button.addEventListener('click', function() {
                showText(button);
            });
        });
        
        document.querySelectorAll('.hideButton').forEach(button => 
            {
            button.addEventListener('click', function() {
                hideText(button);
            });
        });
        
        function showText(button) 
        {
            const li = button.closest('li');
            const description = li.querySelector('.description');
            const showButton = li.querySelector('.showButton');
            const hideButton = li.querySelector('.hideButton');
            
            switch(li.textContent.trim().split(' ')[0])//chat GPT
             {
                case '김정주':
                    description.innerText = "김정주는 넥슨의 창립자이다.";

                    break;
                case '오웬':
                    description.innerText = "오웬 마호니는 넥슨의 CEO이다";
                    <a href= "businesspost.co.kr/BP?command=article_view&num=329590">링크</a>;

                    break;
                case '이정현':
                    description.innerText = "이정현은 넥슨의 주요 개발자 중 한 명이다";
                    window.location.href = "businesspost.co.kr/BP?command=article_view&num=329590";
                    break;
                default:
                    description.innerText = "상세 설명이 없습니다";
            }
            
            showButton.style.display = 'none';
            hideButton.style.display = 'inline';
        }
        
        function hideText(button) 
        {
            const li = button.closest('li');
            const description = li.querySelector('.description');
            const showButton = li.querySelector('.showButton');
            const hideButton = li.querySelector('.hideButton');
            
            description.innerText = "";
            showButton.style.display = 'inline';
            hideButton.style.display = 'none';
        }