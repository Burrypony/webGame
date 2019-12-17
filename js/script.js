console.clear();

select = e => document.querySelector(e);

var styleVars = getComputedStyle(document.documentElement),
	numRowsCols = styleVars.getPropertyValue('--numRowsCols'),
	cubeWidth = parseInt(styleVars.getPropertyValue('--cube-size').replace("px", "")),
	numCubes = numRowsCols*numRowsCols,
	cube = select('.cube'),
	grid = select('.grid');


for (i=0; i<numCubes-1; i++) {
	var clone = cube.cloneNode(true);
	grid.appendChild(clone);
}

gsap.set('.container', { autoAlpha: 1 });
gsap.set('.cube', { rotateY: 90, transformOrigin: "right center" });

gsap.to('.grid', { 
	x: "random(-100, 100)", 
	y: "random(-100, 50)", 
	rotateY: "random(-40, -50)", 
	repeat: -1, 
	repeatDelay: 1,
	repeatRefresh: true, 
	ease: "sine.inOut", 
	duration: 9
});

gsap.timeline({ delay: 0.9 })
	.to('.cube', { 
		duration: 1, 
		scaleX: 0.9,
		ease: "sine.inOut",
		stagger: {
			each: 0.15,
			yoyo: true,
			repeat: -1,
			grid: [numRowsCols, numRowsCols],
			from: "start"
		}
	}
);