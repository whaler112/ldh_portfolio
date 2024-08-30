// 모든 article 요소들을 items에 저장
const items = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const close = aside.querySelector('span');

// items의 갯수만큼 반복을 돌기
for(let el of items){
  el.addEventListener('mouseenter', e=>{
    // 현재 반복돌고 있는 article요소에 mouseenter 이벤트 발생시
    e.currentTarget.querySelector('video').play();
  })
  el.addEventListener('mouseleave', e=>{
    // 현재 반복돌고 있는 article요소에 mouseleave이벤트 발생시
    e.currentTarget.querySelector('video').pause();
  })


   $('.about').click(function(){
    $('.popup').addClass('on')
   })

   $('.popup').click(function(){
    $(this).removeClass('on')
   })

   $('.vid1').click(function(){
    window.open('https://youtu.be/nXL9rxg1ejQ', '_blank' )
  })
   $('.vid2').click(function(){
    window.open('https://youtu.be/DFhQx7DyKwk', '_blank' )
  })
   $('.vid3').click(function(){
    window.open('https://youtu.be/CluDCHl0-VM', '_blank' )
  })
   $('.vid4').click(function(){
    window.open('https://youtu.be/vMPxX_OfaNA', '_blank' )
  })
   $('.vid5').click(function(){
    window.open('https://youtu.be/iVLMNDg5AwY', '_blank' )
  })
}