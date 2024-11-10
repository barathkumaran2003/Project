const buttons=document.querySelectorAll('.btn');
                const boxes=document.querySelectorAll('.box');

                buttons.forEach((button)=>{
                    button.addEventListener('click',(e)=>{
                        e.preventDefault();
                        setActiveBtn(e);
                        const btnfilter=e.target.dataset.filter;

                        boxes.forEach((box=>{
                            if(btnfilter=='all'){
                                box.style.display="block";
                            }
                            else{
                                const boxfilter=box.dataset.item;
                                if(btnfilter==boxfilter)
                            {
                                box.style.display="block";
                            }else{
                                box.style.display="none";
                            }
                            }
                        }))
                    });
                });

                function setActiveBtn(e){
                    buttons.forEach((button)=>{
                        button.classList.remove('btn-click');
                    });
                    e.target.classList.add('btn-click');
                }