function Coin(type){
		this.type=type;
		this.x=0;
		this.y=0;
		this.w=60;
		this.h=60;
		this.cur=0;	
		this.move();
	};
	Coin.prototype.draw=function(gd){
		gd.save();
		var type=-1;
		
		switch(this.type){
			case 1:
			case 2:
			case 3:
				type=1;
			break;
			case 4:
			case 5:
				type=2;
			break;	
		};
		
		gd.drawImage(JSON['coinAni'+type],0,this.cur*this.h,this.w,this.h,this.x-this.w/2,this.y-this.h/2,this.w,this.h);
		gd.restore();	
	}
	
	Coin.prototype.move=function(){
		var _this=this;
		setInterval(function(){
			_this.cur++;
			_this.cur%=10;
		},100);	
		
		setInterval(function(){
			_this.x+=(40-_this.x)/6;
			_this.y+=(600-_this.y)/6;
		},30);
		
		var oA=new Audio();
		oA.src='snd/coin.wav';
		oA.play();
		
	};
	