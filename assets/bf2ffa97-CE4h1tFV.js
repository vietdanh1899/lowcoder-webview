import{generateWrapJs as a}from"./90e6d3f7-0GLayY-W.js";function r(o,n){return"insert into "+o+`
  (`+n.map(e=>e.column.name).join(", ")+`)
  values (
    `+n.map(e=>a(e.compName,e.column.comp)).join(`,
    `)+`
  )`}export{r as generateInsertSql};
