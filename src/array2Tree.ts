export const array2Tree = (items: any[], idName: string = 'id', pidName: string = 'pid'): any[] => {
  try {
    const result=[];
    const itemMap : any={};
    for (const item of items) {
      const id=item[idName];
      const pid=item[pidName];
      if(!id || id == undefined){
        continue;
      }
      if(!itemMap.hasOwnProperty(id)){
        itemMap[id]={
          children: [],
        }
      }
      
      itemMap[id]={
        ...item,
        children: itemMap[id]['children']
      }
      
      const treeItem = itemMap[id];
      if(pid == 0 || pid == undefined){
        result.push(treeItem);
      }else{
        if(!itemMap.hasOwnProperty(pid)){
          itemMap[pid]={
            children:[],
          }
        }
        itemMap[pid].children.push(treeItem);
      }
    }
    return result;
  } catch (error) {
    return [];
  }
}


export default array2Tree;
