//  JavaScript is a lot like a shopping centre in a recession
//  There's a lot of closures
(function(doc, win) {

    //  If you don't have QSA, you must hate me
    if(!doc.querySelector) {
        return alert('Your browser sucks. Sorry.');
    }
    
    //  I never node her that well, Officer.
    var list = doc.querySelector('ul'),
        all = list.children,
        i = all.length,
        html = [];
        
    //  Censorship, yo
    while(i--) {
        html[i] = all[i].innerHTML;
        all[i].innerHTML = '';
    }
        
    //  Go all Frankenstein and shit
    var animate = function(i) {
        var me = all[i],
        
            add = 'dollar',
            
            //  C = character delay
            //  D = line delay
            c = 0, d = 0;
            
        //  Censor the page
        me.className = add;
        list.style.marginTop = '-' + (((i + 1) * 25) / 2) + 'px';
        
        var inty = setInterval(function() {
            //  MOAR TEXTS
            me.innerHTML = html[i].substr(0, c) + '<span class="typing">|</span>';

            //  What's the best programming language in the world?
            //  Not this one.
            c++;
            
            if(html[i].length < c) {
                clearInterval(inty);
                i++;
                
                
                if(all[i]) {
                    setTimeout(function() {
                        me.innerHTML = html[i - 1];
                        animate(i);
                    }, 100);
                }
            }
        }, 50);
    };
    
    animate(0);
    
  
})(document, window);

//  It's like Go Compare, but without the opera singer
Array.prototype.equals = function(arr) {
    //  If it's too long, it's not the right, uh.. Something that's not a penis joke
    if(this.length != arr.length) {
        return false;
    }
    
    for(var i = 0; i < arr.length; i++) {
        //  RECURSION MOTHERFUCKER DO YOU UNDERSTAND IT?
        if(this[i].compareArrays) {
            if(!this[i].compareArrays(arr[i])) {
                return false;
            }
        }
        if(this[i] != arr[i]) {
            return false;
        }
    }
    return true;
}