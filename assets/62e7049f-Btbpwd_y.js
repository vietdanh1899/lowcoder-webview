import{aj as t,F as r,mD as l,mE as m,mF as g}from"./index-CyMr76_m.js";const i=[{name:t("shortcut.global"),shortcuts:[{name:t("shortcut.toggleShortcutList"),keys:[{key:"?"}],target:"global",action:"toggleShortcutList"}]},{name:t("shortcut.editor"),shortcuts:[{name:t("shortcut.toggleLeftPanel"),keys:[{mod:!0,key:"B"}],target:"global",action:"toggleLeftPanel"},{name:t("shortcut.toggleBottomPanel"),keys:[{mod:!0,key:"J"}],target:"global",action:"toggleBottomPanel"},{name:t("shortcut.toggleRightPanel"),keys:[{mod:!0,key:"U"}],target:"global",action:"toggleRightPanel"},{name:t("shortcut.toggleAllPanels"),keys:[{mod:!0,key:"."}],target:"global",action:"toggleAllPanels"},{name:t("shortcut.preview"),keys:[{mod:!0,shift:!0,key:"P"}],target:"global",action:"preview"},{name:t("shortcut.undo"),keys:[{mod:!0,key:"Z"}],target:"global",action:"undo"},{name:t("shortcut.redo"),keys:[{mod:!0,shift:!0,key:"Z"}],target:"global",action:"redo"},{name:t("shortcut.showGrid"),keys:[{mod:!0}]}]},{name:t("shortcut.component"),shortcuts:[{name:t("shortcut.multiSelect"),keys:[{mod:!0,click:!0}]},{name:t("shortcut.selectAll"),keys:[{mod:!0,key:"A"}],target:"editor",action:"selectAllComps"},{name:t("shortcut.copy"),keys:[{mod:!0,key:"C"}],target:"editor",action:"copyComps"},{name:t("shortcut.cut"),keys:[{mod:!0,key:"X"}],target:"editor",action:"cutComps"},{name:t("shortcut.paste"),keys:[{mod:!0,key:"V"}],target:"editor",action:"pasteComps"},{name:t("shortcut.move"),keys:[{directionKey:!0}]},{name:t("shortcut.zoom"),keys:[{mod:!0,directionKey:!0}]},{name:t("shortcut.delete"),keys:[{key:"Delete"},{key:"Backspace"}],target:"global",action:"deleteComps"},{name:t("shortcut.deSelect"),keys:[{key:"Escape"}],target:"editor",action:"deselectComps"}]},{name:t("shortcut.queryEditor"),shortcuts:[{name:t("shortcut.excuteQuery"),keys:[{mod:!0,key:"Enter",notFilterInput:!0}],target:"global",action:"executeQuery"}]},{name:t("shortcut.editBox"),shortcuts:[{name:t("shortcut.formatting"),keys:[{mod:!0,key:"L"}]},{name:t("shortcut.openInLeftPanel"),keys:[{mod:!0,click:!0}]}]}],u=r.mapValues(r.groupBy(i.flatMap(e=>e.shortcuts).filter(e=>e.target&&e.action),e=>e.target),e=>Object.fromEntries(e.flatMap(a=>a.keys.map(o=>[l(o),[a.action,o]]))));function k(e,a){const o=u[a],s=m(e);if(o.hasOwnProperty(s)){const[c,n]=o[s];if(n.notFilterInput||!g(e))return c}return""}export{k as h,i as m};
