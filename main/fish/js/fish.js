//鱼
	var FISH_SIZE=[
		null,
		{w: 55, h: 37, collR: 16},
		{w: 78, h: 64, collR: 24},
		{w: 72, h: 56, collR: 26},
		{w: 77, h: 59, collR: 22},
		{w: 107, h: 122, collR: 29}
	];
	
	function Fish(type){
		this.type=type;
		this.x=200;
		this.y=200;
		this.collR=FISH_SIZE[this.type].collR;
		this.w=FISH_SIZE[this.type].w;
		this.h=FISH_SIZE[this.type].h;
		this.speed=1;
		this.scale=1;
		this.rotate=30;
		this.cur=0;
		this.move();
	}
	Fish.prototype.draw=function(gd){
		
		gd.save();
		
		gd.translate(this.x,this.y);
		gd.rotate(d2a(this.rotate));
		gd.scale(1,this.scale);
		gd.drawImage(JSON['fish'+this.type],0,this.h*this.cur,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
		gd.restore();
			
	};
	Fish.prototype.move=function(){
		var _this=this;
		setInterval(function(){
			
			var speedY=Math.sin(d2a(_this.rotate))*_this.speed;
			var speedX=Math.cos(d2a(_this.rotate))*_this.speed;
			
			_this.x+=speedX;
			_this.y+=speedY;
		},30);	
		
		setInterval(function(){
			_this.cur++;
			_this.cur%=4;	
		},200);
	};
	
	Fish.prototype.isDie=function(bX,bY){
		var x=this.x;
		var y=this.y;
		
		var a=bY-y;
		var b=bX-x;
		
		var c=Math.sqrt(a*a+b*b);
		
		if(this.collR>c){
			return true;
		}else{
			return false;	
		}
	};
	
	
	
	
	
	
	
	
	
	