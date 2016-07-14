/**
 * Created by zhangdanqing on 16/7/12.
 */
/**
 * oBox:模拟的选择框
 * aSpan:模拟的options 每个选项
 * oI:选择框右边的图标,例如下拉三角
 * bNameb:下拉三角默认样式className
 * aName:下拉三角点击后的样式className
 * optName:每一项option的样式className
 *
 * addEvent,removeEvent:辅助函数
 */

function select(oBox,aSpan,oI,bNameb,aName,optName)
{
    function addEvent(obj, sEv, fn)
    {
        if (obj.addEventListener)
        {
            obj.addEventListener(sEv, fn, false);
        }
        else
        {
            obj.attachEvent('on'+sEv, fn);
        }
    }

    function removeEvent(obj, sEv, fnName)
    {
        if (obj.removeEventListener)
        {
            obj.removeEventListener(sEv, fnName, false);
        }
        else
        {
            obj.detachEvent('on'+sEv, fnName);
        }
    }
    function selectBox(){
        //下拉三角的样式
        oI.className=bNameb;
        for(var i=0;i<aSpan.length;i++)
        {
            aSpan[i].style.display='block';
            (function(index){
                function selectOver(){
                    for(var i=0;i<aSpan.length;i++)
                    {
                        aSpan[i].className='';
                    }
                    //options选中之后的样式
                    aSpan[index].className=optName;
                }
                function selectClick(){
                    //下拉三角的样式
                    oI.className=aName;
                    for(var i=0;i<aSpan.length;i++)
                    {
                        aSpan[i].style.display='none';
                        aSpan[i].setAttribute('data-con',aSpan[i].innerHTML);
                        oBox.innerHTML=aSpan[index].getAttribute('data-con');
                        removeEvent(aSpan[i],'mouseover',selectOver);
                        removeEvent(aSpan[i],'click',selectClick);
                    }

                }
                addEvent(aSpan[i],'mouseover',selectOver);
                addEvent(aSpan[i],'click',selectClick);
            })(i);
        }
    }
    oBox.onclick=function(){
        selectBox();
    };
    oI.onclick=function(){
        selectBox();
    };
}