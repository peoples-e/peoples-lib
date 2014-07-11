function(doc){
  if(doc.content_type){
    emit([doc.content_type, doc.info.title], 1);
  }
}