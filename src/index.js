import 'jquery';
import './styles/index.css';

(function mouseMove(){
    let isMousemove = false;
    const timeInterval = 100;

    $("*").mousemove((event) =>{
        if(!isMousemove){
            isMousemove = true;
            addParticle(event.pageX, event.pageY);

            setTimeout(()=>{isMousemove = false}, timeInterval);
        }
    });
})();

function addParticle(mouseX, mouseY){
    const animationTime = genRandomNum(1500, 2000);
    const animationTop = genRandomNum(150, 250);
    const $particle_div = $(`<div class="particle"></div>`).css({"top": mouseY,
                                                                 "left": mouseX,
                                                                 "animation": "shrinking-spinning " + ((animationTime + 100) / 1000)
                                                                  + "s"
                                                                })
                                                            .animate({"top": "+=" + animationTop + "px"
                                                            }, animationTime, function(){
                                                                $(this).remove();
                                                            });
    $("body").append($particle_div);
}

function genRandomNum(min, max){
    return Math.floor(min + Math.random() * (max - min + 1));
}