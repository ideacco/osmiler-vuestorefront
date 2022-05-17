
export default({$axios},inject)=>{
    inject('test',()=>$axios.$get('/test'))
    inject('test2',()=>$axios.$get('/test'))
}