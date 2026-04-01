$(document).ready(function() {
   //отображаем при открытии страницы (дефолтный вариант - полный)
   if($(".show_less").length>0 || $(".show_more").length>0) {
      if (getContentLevel() == "show_less") {
         displayContent("show_less");
         rightMenuFiltration("show_less");
      } else {
         displayContent("show_more");
         rightMenuFiltration("show_more");
      }
   }
   else{
      $(".content-filtration").addClass("content-filtration--disabled")
      $(".content-filtration").removeClass("content-filtration--less")
      $(".content-filtration").removeClass("content-filtration--more")
   }

   //запись состояния в хранилище
   function setContentDisplayLevel(level){
      let status;
      switch (level) {
         case "show_more":
            sessionStorage.setItem("contentDisplayLevel", "show_more");
            status = true;
            break;
         case "show_less":
            sessionStorage.setItem("contentDisplayLevel", "show_less");
            status = true;
            break;
         default:
            console.log('Wrong param (required "show_more" or "show_less")');
            status = false;
            break;
      }
      return status;
   }
   //чтение состония из хранилища
   function getContentLevel(){
      return sessionStorage.getItem("contentDisplayLevel");
   }
   //обработка разделов правого меню
   function rightMenuFiltration(displayLevel){
      let showMoreIds = $(".show_more");
      switch (displayLevel) {
         case "show_more":
            showMoreIds.each((index,element)=>{
               let linksInToc = $(`#wh_topic_toc [data-tocid="${element.id}"]`);
               let linkParent = linksInToc.parent().parent();
               linkParent.removeClass("filtration-hide");
            })
            break;
         case "show_less":
            showMoreIds.each((index,element)=>{
               let linksInToc = $(`#wh_topic_toc [data-tocid="${element.id}"]`);
               let linkParent = linksInToc.parent().parent();
               linkParent.addClass("filtration-hide");
            })
            break;
         default:
            console.log('Wrong displayLevel param (required "show_more" or "show_less")');
            break;
      }
   }
   //отображение контента
   function displayContent(displayLevel,transitionTime=0){
      let status;
      switch (displayLevel) {
         case "show_more":
            $(".show_less").stop().slideUp(transitionTime);
            $(".show_more").stop().slideDown(transitionTime);
            //доработка для галерей
            $(".gallery.show_less+.doc-gallery").stop().slideUp(transitionTime);
            $(".gallery.show_more+.doc-gallery").stop().slideDown(transitionTime);

            $(".content-filtration").removeClass("content-filtration--disabled");
            $(".content-filtration").removeClass("content-filtration--less");
            $(".content-filtration").addClass("content-filtration--more");
            setContentDisplayLevel("show_more");
            $(".content-filtration").attr("title",$(".content-filtration").attr("data-title-more-text"));
            status = true;
            break;
         case "show_less":
            $(".show_less").stop().slideDown(transitionTime);
            $(".show_more").stop().slideUp(transitionTime);
            //доработка для галерей
            $(".gallery.show_less+.doc-gallery").stop().slideDown(transitionTime);
            $(".gallery.show_more+.doc-gallery").stop().slideUp(transitionTime);

            $(".content-filtration").removeClass("content-filtration--disabled");
            $(".content-filtration").addClass("content-filtration--less");
            $(".content-filtration").removeClass("content-filtration--more");
            setContentDisplayLevel("show_less");
            $(".content-filtration").attr("title",$(".content-filtration").attr("data-title-less-text"));
            status = true;
            break;
         default:
            console.log('Wrong displayLevel param (required "show_more" or "show_less")');
            status = false;
            break;
      }
      return status;
   }
   //обработчики кнопки
   $(".content-filtration").on("click",function(){
      if($(this).hasClass("content-filtration--more")){
         displayContent("show_less",300);
         rightMenuFiltration("show_less");
         return;
      }
      if($(this).hasClass("content-filtration--less")){
         displayContent("show_more",300);
         rightMenuFiltration("show_more");
         return;
      }
   });
});