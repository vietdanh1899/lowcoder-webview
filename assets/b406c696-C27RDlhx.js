import{aj as e,bA as l,bw as b,bR as d,bS as o,by as t,bT as g,as as r,bG as i,bH as u}from"./index-CyMr76_m.js";const n=[{label:e("badge.SizeDefault"),value:"default"},{label:e("badge.SizeSmall"),value:"small"}],s=[{label:e("badge.number"),value:"number"},{label:e("badge.dot"),value:"dot"}],w={badgeType:l(s,"number"),badgeCount:b(d("badgeCount"),"0"),badgeSize:l(n,"default"),showZero:o,overflowCount:b(t,99),badgeTitle:b(g,"")},y=a=>r(i,{name:u.advanced,children:[a.badgeType.propertyView({label:e("badge.Type"),radioButton:!0}),a.badgeCount.propertyView({label:e("badge.Count")}),a.badgeType.getView()==="number"&&a.overflowCount.propertyView({label:e("badge.overflowCount")}),a.badgeType.getView()==="number"&&a.badgeSize.propertyView({label:e("badge.Size")}),a.badgeTitle.propertyView({label:e("badge.Title")})]});export{y as BadgeBasicSection,w as badgeChildren};
