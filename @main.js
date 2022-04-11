"use strict";

class ArtificialMentalRetardation
{
	#running;

	constructor()
	{
		if(!ArtificialMentalRetardation.instance)
		{
		}
		return ArtificialMentalRetardation.instance||(ArtificialMentalRetardation.instance=this);
	}
	async start()
	{
		this.#running=true;
		while(this.#running)
		{
		}
	}
	stop()
	{
		this.#running=false;
	}
}
class Image
{
	static get EndScreen_lose()
	{
		return "none";
	}
	static get EndScreen_pointerout()
	{
		return "url(shapes/135.svg)";
	}
	static get EndScreen_pointerover()
	{
		return "url(shapes/137.svg)";
	}
	static get EndScreen_timeup()
	{
		return "url(shapes/111.svg)";
	}
	static get EndScreen_win()
	{
		return "url(shapes/114.svg)";
	}
	static get StartScreen_pointerout()
	{
		return "url(shapes/82.svg)";
	}
	static get StartScreen_pointerover()
	{
		return "url(shapes/83.svg)";
	}
}
class Sound
{
	static get background()
	{
		return new Audio("sounds/1_bgmusic05.wav.mp3");
	}
	static get exit()
	{
		return new Audio("sounds/74.mp3");
	}
	static get good()
	{
		return null;
	}
	static get lose()
	{
		return null;
	}
	static get pointerover()
	{
		return new Audio("sounds/98.mp3");
	}
	static get right()
	{
		return new Audio("sounds/3_pick.mp3");
	}
	static get start()
	{
		return new Audio("sounds/2_開始玩.mp3");
	}
	static get timeup()
	{
		return new Audio("sounds/4_lose.mp3");
	}
	static get win()
	{
		return new Audio("sounds/6_win.mp3");
	}
	static get wrong()
	{
		return new Audio("sounds/99.mp3");
	}
}

class Cutie
{
	#face;
	#eyes
	#message;

	constructor()
	{
		if(!Cutie.instance)
		{
			this.#face=new Element(document.querySelector(".cutie > .cutie-face"));
			this.#eyes=new Element(document.querySelector(".cutie > .cutie-eyes"));
			this.#message=new Element(document.querySelector(".cutie > .cutie-message-text"));
			this.visible=false;
			const wink=(winking) =>
			{
				if(winking)
				{
					this.#eyes.image="url(shapes/159.svg)";
					setTimeout(wink,100.0,false);
				}
				else
				{
					this.#eyes.image="url(shapes/158.svg)";
					setTimeout(wink,Math.max(0.5*1000,Math.random()*1*1000),true);
				}
			};
			wink(true);
		}
		return Cutie.instance||(Cutie.instance=this);
	}
	set visible(value)
	{
		this.#face.visible=value;
		this.#eyes.visible=value;
		this.#message.visible=value;
	}
	set face(value)
	{
		if(value==="smile")
		{
			this.#face.image="url(shapes/157.svg)";
		}
		else if(value==="sad")
		{
			this.#face.image="url(shapes/160.svg)";
		}
	}
	async start(ended)
	{
		this.visible=true;
		const audio=new Audio("sounds/15_b02-2-0001至0010.wav.mp3");
		audio.play();
		audio&&audio.addEventListener("ended",function()
		{
			ended&&ended();
		});
	}
}

class Question
{
	#answers=new Array(1,2,3);
	#clickable=false;
	#index=0;
	#leftImage;
	#questions=new Array(128,133,138,143,148);
	#rightImages;
	#rightBackgrounds;
	#rights;
	#wrongs;

	constructor(click,cutie)
	{
		if(!Question.instance)
		{
			this.#leftImage=new Element(document.querySelector(".question > .left > .image"));
			const handlers=
			{
				click: async (left,top,index) =>
				{
					if(this.#clickable===false)
					{
						return;
					}
					if(this.#answers[index]==1)
					{
						Sound.right.play();

						this.right(index);
						await Utility.waitForCondition(() => this.#clickable);
						click&&click("right");
					}
					else
					{
						Sound.wrong.play();
						cutie.face="sad";
						this.wrong(index);
						await Utility.waitForCondition(() => this.#clickable);
						click&&click("wrong");
						cutie.face="smile";
					}
				},
				pointerout: (left,top,index) =>
				{
					this.#rightBackgrounds[index].image="url(shapes/91.svg)";
				},
				pointerover: (left,top,index) =>
				{
					Sound.pointerover.play();
					this.#rightBackgrounds[index].image="url(shapes/92.svg)";
				}
			}
			this.#rightBackgrounds=new Array(3);
			for(let i=0;i<this.#rightBackgrounds.length;i++)
			{
				this.#rightBackgrounds[i]=new Element(document.querySelector(`.question > .right > .background-${i+1}`));
				this.#rightBackgrounds[i].addEventListener("click",(left,top) => handlers.click(left,top,i));
				this.#rightBackgrounds[i].addEventListener("pointerout",(left,top) => handlers.pointerout(left,top,i));
				this.#rightBackgrounds[i].addEventListener("pointerover",(left,top) => handlers.pointerover(left,top,i));
			}
			this.#rightImages=new Array(3);
			for(let i=0;i<this.#rightImages.length;i++)
			{
				this.#rightImages[i]=new Element(document.querySelector(`.question > .right > .image-${i+1}`));
			}
			this.#rights=new Array(3);
			for(let i=0;i<this.#rights.length;i++)
			{
				this.#rights[i]=new Element(document.querySelector(`.question > .right > .right-${i+1}`));
			}
			this.#wrongs=new Array(3);
			for(let i=0;i<this.#wrongs.length;i++)
			{
				this.#wrongs[i]=new Element(document.querySelector(`.question > .right > .wrong-${i+1}`));
			}
			this.reset();
		}
		return Question.instance||(Question.instance=this);
	}
	set clickable(value)
	{
		this.#clickable=value;
	}
	next()
	{
		this.#leftImage.image=`url(images/${this.#questions[this.#index]}-1.png)`;
		this.#answers=Utility.randomSort(this.#answers);
		for(let i=0;i<3;i++)
		{
			this.#rightImages[i].image=`url(images/${this.#questions[this.#index]}-${this.#answers[i]}.png`;
		}
		this.#index+=1;
	}
	reset()
	{
		this.#clickable=false;
		this.#index=0;
		this.#questions=Utility.randomSort(this.#questions);
	}
	async right(index)
	{
		this.#clickable=false;
		for(let i=0;i<3;i++)
		{
			this.#rights[index].visible=true;
			await Utility.waitForSeconds(0.1);
			this.#rights[index].visible=false;
			await Utility.waitForSeconds(0.1);
		}
		this.#rights[index].visible=true
		await Utility.waitForSeconds(0.5);
		this.#rights[index].visible=false
		this.#clickable=true;
	}
	async wrong(index)
	{
		this.#clickable=false;
		for(let i=0;i<3;i++)
		{
			this.#wrongs[index].visible=true;
			await Utility.waitForSeconds(0.1);
			this.#wrongs[index].visible=false;
			await Utility.waitForSeconds(0.1);
		}
		this.#wrongs[index].visible=true;
		await Utility.waitForSeconds(0.5);
		this.#wrongs[index].visible=false;
		this.#clickable=true;
	}
	set visible(value)
	{
		new Element(document.querySelector(".question")).visible=value;
	}
}

class Main
{
	artificialMentalRetardation;
	autoplay;
	backgroundMusic;
	cutie;
	endScreen;
	question;
	running=false;
	score=0;
	timer;

	constructor()
	{
		this.click=this.click.bind(this);
		this.restart=this.restart.bind(this);
		this.start=this.start.bind(this);
		this.timeup=this.timeup.bind(this);

		new ExitButton();
		new FullScreen();
		new StartScreen(this.start);

		this.artificialMentalRetardation=new ArtificialMentalRetardation();
		this.autoplay=new AutoPlay(this.autoplay_click);
		this.backgroundMusic=new BackgroundMusic();
		this.cutie=new Cutie();
		this.endScreen=new EndScreen(this.restart);
		this.question=new Question(this.click,this.cutie);
		this.starCursor=new StarCursor();
		this.timer=new Timer(this.timeup);

		this.starCursor.visible=true;
	}
	click(result)
	{
		if(result==="right")
		{
			this.score+=1;
		}
	}
	gameover(result)
	{
		if(result==="timeup")
		{
			Sound.timeup.play();
		}
		else if(result==="win")
		{
			Sound.win.play();
		}
		this.cutie.visible=false;
		this.endScreen.result=result;
		this.endScreen.visible=true;
		this.question.visible=false;
		this.timer.stop();
	}
	restart()
	{
		this.endScreen.visible=false;
		this.start();
	}
	async start()
	{
		this.cutie.visible=true;
		this.question.reset();
		this.question.visible=true;
		this.score=0;
		this.timer.reset();
		this.running=false;
		this.cutie.start(() => this.running=true);
		this.question.next();
		await Utility.waitForCondition(() => this.running===true);
		this.timer.start(60);
		while(this.running)
		{
			this.question.clickable=true;
			let previousScrre=this.score;
			await Utility.waitForCondition(() => (previousScrre<this.score)||(this.running===false));
			if(this.score==5)
			{
				this.gameover("win");
				break;
			}
			this.question.next();
		}
	}
	timeup()
	{
		this.running=false;
		this.gameover("timeup");
	}
}

new Main();