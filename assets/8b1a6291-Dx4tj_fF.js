import{eV as r,hb as l,d as c}from"./index-CyMr76_m.js";import{ListViewComp as i,ListViewImplComp as n,defaultListViewData as p}from"./406f1f19-ChOfg_s_.js";import{listPropertyView as M}from"./e245553d-BTdk77so.js";import"./890d69bf-DGU2Stkr.js";import"./4109a019-urJExrvy.js";import"./6bf3f6e6-rM4vV2jt.js";let e=i;const w=M("grid");e=l(e,m=>c(w,{comp:m}));const a=e;function o(m,t){return{noOfRows:`[
  {
    "rate": "9.2",
    "title": "The Shawshank Redemption",
    "url": "https://www.imdb.com/title/tt0111161/",
    "cover": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg"
  },
  {
    "rate": "9.2",
    "title": "The Godfather",
    "url": "https://www.imdb.com/title/tt0068646/",
    "cover": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg"
  },
  {
    "rate": "9.0",
    "title": "The Dark Knight",
    "url": "https://www.imdb.com/title/tt0468569/",
    "cover": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg"
  },
  {
    "rate": "9.0",
    "title": "The Godfather Part II",
    "url": "https://www.imdb.com/title/tt0071562/",
    "cover": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg"
  },
  {
    "rate": "9.0",
    "title": "12 Angry Men",
    "url": "https://www.imdb.com/title/tt0050083/",
    "cover": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg"
  },
  {
    "rate": "8.9",
    "title": "Schindler's List",
    "url": "https://www.imdb.com/title/tt0108052/",
    "cover": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg"
  }
]`,noOfColumns:"3",container:r([{item:{compType:"image",name:t.genItemName("image"),comp:{src:"{{currentItem.cover}}",autoHeight:"fixed"}},layoutItem:{i:"",w:7,h:14,x:0,y:0}},{item:{compType:"link",name:t.genItemName("link"),comp:{text:"{{i+1}}. {{currentItem.title}}",onEvent:[{name:"click",handler:{compType:"goToURL",comp:{url:"{{currentItem.url}}",inNewTab:!0},condition:"",slowdown:"debounce",delay:""}}]}},layoutItem:{i:"",h:5,w:17,x:7,y:0}},{item:{compType:"rating",name:t.genItemName("rating"),comp:{value:"{{currentItem.rate / 2}}",max:"5",label:{text:"",width:"33",widthUnit:"%",position:"row",align:"right"},allowHalf:!0,disabled:!0}},layoutItem:{i:"",h:5,w:17,x:7,y:9}}])}}const y=Object.freeze(Object.defineProperty({__proto__:null,GridComp:a,defaultGridData:o},Symbol.toStringTag,{value:"Module"})),u=Object.freeze(Object.defineProperty({__proto__:null,GridComp:a,ListViewComp:i,ListViewImplComp:n,defaultGridData:o,defaultListViewData:p},Symbol.toStringTag,{value:"Module"}));export{u as _,y as a};
