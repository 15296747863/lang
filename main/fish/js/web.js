var WEB_SIZE=[
		null,
		{x:332,y:372,w:90,h:90},
		{x:12,y:412,w:110,h:110},
		{x:177,y:367,w:130,h:130},
		{x:252,y:196,w:150,h:150},
		{x:0,y:244,w:165,h:165},
		{x:240,y:0,w:185,h:185},
		{x:20,y:20,w:205,h:205},
	];
	
	function Web(type){
		this.type=type;
		this.picX=WEB_SIZE[this.type].x;
		this.picY=WEB_SIZE[this.type].y;
		this.x=0;
		this.y=0;
		this.w=WEB_SIZE[this.type].w;
		this.h=WEB_SIZE[this.type].h;
		this.scale=1;
		this.move();
	}
	Web.prototype.draw=function(gd){
		gd.save();
		gd.translate(this.x,this.y);
		gd.scale(this.scale,this.scale);
		gd.drawImage(JSON['web'],this.picX,this.picY,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
		gd.restore();
	}
	
	Web.prototype.move=function(){
		var _this=this;
		this.timer=setInterval(function(){
			_this.scale+=0.1;
			if(_this.scale>=1.5){
				clearInterval(_this.timer);	
			}
		},140);
	};
	