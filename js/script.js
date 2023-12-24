// Featured Products section 3 start
let abbr = document.getElementsByTagName('address');
let product = document.getElementsByClassName('product');
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia('(max-width: 768px)');
if (mob_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (product == 1) {
        l = 0;
    }
    for (const i of product) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }
};
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {
        l = 0;
    }
    for (const i of product) {
        if (product_page > 1) {
            i.style.left = '-' + l + '%';
        }
    }
};
abbr[1].onclick = () => {
    right_mover();
};
abbr[0].onclick = () => {
    left_mover();
};
// Featured Products section 3 end




// Top categories section 4 start

let strong = document.getElementsByTagName('strong');
let TopProduct = document.getElementsByClassName('TopProduct');
let TopProduct_page = Math.ceil(TopProduct.length / 4);
let t = 0;
let movePers = 25.34;
let maxMoves = 203;
// mobile_view
let mobile_view = window.matchMedia('(max-width: 768px)');
if (mobile_view.matches) {
    movePers = 50.36;
    maxMoves = 504;
}

let right_movers = () => {
    t = t + movePers;
    if (TopProduct == 1) {
        t = 0;
    }
    for (const i of TopProduct) {
        if (t > maxMoves) {
            t = t - movePers;
        }
        i.style.left = '-' + t + '%';
    }
};
let left_movers = () => {
    t = t - movePers;
    if (t <= 0) {
        t = 0;
    }
    for (const i of TopProduct) {
        if (TopProduct_page > 1) {
            i.style.left = '-' + t + '%';
        }
    }
};
strong[1].onclick = () => {
    right_movers();
};
strong[0].onclick = () => {
    left_movers();
};
// Top categories section 4 start



// What client says about us section -6 start
let ClientAbbr = document.getElementsByTagName('abbr');
let ClientSay = document.getElementsByClassName('ClientSay');
let ClientSay_page = Math.ceil(ClientSay.length / 4);
let c = 0;
let ClientSaymovePer = 25.34;
let ClientSaymaxMove = 203;
// mobile_view
let ClientMob_view = window.matchMedia('(max-width: 768px)');
if (ClientMob_view.matches) {
    ClientSaymovePer = 50.36;
    ClientSaymaxMove = 504;
}

let ClientRight_mover = () => {
    c = c + ClientSaymovePer;
    if (ClientSay == 1) {
        c = 0;
    }
    for (const i of ClientSay) {
        if (c > ClientSaymaxMove) {
            c = c - ClientSaymovePer;
        }
        i.style.left = '-' + c + '%';
    }
};
let ClientLeft_mover = () => {
    c = c - ClientSaymovePer;
    if (c <= 0) {
        c = 0;
    }
    for (const i of ClientSay) {
        if (ClientSay_page > 1) {
            i.style.left = '-' + c + '%';
        }
    }
};
ClientAbbr[1].onclick = () => {
    ClientRight_mover();
};
ClientAbbr[0].onclick = () => {
    ClientLeft_mover();
};

// What client says about us section -6 end




// recently Added section -7 start
let article = document.getElementsByTagName('article');
let RecentlyProduct = document.getElementsByClassName('RecentlyProduct');
let RecentlyProduct_page = Math.ceil(RecentlyProduct.length / 4);
let r = 0;
let RecentlyMovePer = 25.34;
let RecentlymaxMove = 203;
// mobile_view
let RecentlyMob_view = window.matchMedia('(max-width: 768px)');
if (RecentlyMob_view.matches) {
    RecentlyMovePer = 50.36;
    RecentlymaxMove = 504;
}

let RecentlyRight_mover = () => {
    r = r + RecentlyMovePer;
    if (RecentlyProduct == 1) {
        r = 0;
    }
    for (const i of RecentlyProduct) {
        if (r > RecentlymaxMove) {
            r = r - RecentlyMovePer;
        }
        i.style.left = '-' + r + '%';
    }
};
let RecentlyLeft_mover = () => {
    r = r - RecentlyMovePer;
    if (r <= 0) {
        r = 0;
    }
    for (const i of RecentlyProduct) {
        if (RecentlyProduct_page > 1) {
            i.style.left = '-' + r + '%';
        }
    }
};
article[1].onclick = () => {
    RecentlyRight_mover();
};
article[0].onclick = () => {
    RecentlyLeft_mover();
};
// recently Added section -7 end
