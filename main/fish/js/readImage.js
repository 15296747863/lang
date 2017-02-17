//加载资源函数
function loadImage(arr,fnSucc,fnLoading){
	var iNow=0;
	for(var i=0; i<arr.length;i++){
		var oImg=new Image();
		
		(function(i,oImg){
			oImg.onload=function(){
				iNow++;
				
				JSON[arr[i]]=this;
				
				var scale=iNow/arr.length;
				
				//加载过程
				fnLoading&&fnLoading(scale);
				
				//加载完成
				if(iNow==arr.length){
					fnSucc&&fnSucc();
				}
				
			};
		})(i,oImg);
		
		oImg.src='img/'+arr[i]+'.png';	
	}
}